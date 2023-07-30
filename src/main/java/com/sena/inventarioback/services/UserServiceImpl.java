package com.sena.inventarioback.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import javax.security.auth.login.AccountNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.sena.inventarioback.dto.UserDTO;
import com.sena.inventarioback.integrations.IPeopleIntegration;
import com.sena.inventarioback.interfaces.IUserService;
import com.sena.inventarioback.models.User;
import com.sena.inventarioback.repositories.UserRepository;
import com.sena.inventarioback.utils.crud.CrudServiceImpl;
import com.sena.inventarioback.utils.response.DefaultResponse;
import com.sena.inventarioback.utils.response.DefaultResponse.MESSAGETYPES;
import com.sena.inventarioback.utils.response.ObjectResponse;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Component
@Slf4j
public class UserServiceImpl extends CrudServiceImpl<User, UserDTO, Integer, UserRepository>
		implements IUserService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private IPeopleIntegration iPeopleIntegration;

	@Override
	public ResponseEntity<DefaultResponse<User>> save(UserDTO dto, BindingResult bindingResult,
			Class<User> entityClass) {
		dto.setCreatedAt(LocalDateTime.now());
		dto.setUpdatedAt(LocalDateTime.now());
		dto.setPassword(BCrypt.hashpw(dto.getPassword(), BCrypt.gensalt()));
		return super.save(dto, bindingResult, entityClass);
	}

	@Override
	public ResponseEntity<DefaultResponse<User>> update(Integer id, UserDTO dto, BindingResult bindigResult,
			Class<User> entityClass) {
		dto.setPassword(BCrypt.hashpw(dto.getPassword(), BCrypt.gensalt()));
		dto.setUpdatedAt(LocalDateTime.now());
		dto.setPassword(BCrypt.hashpw(dto.getPassword(), BCrypt.gensalt()));
		return super.update(id, dto, bindigResult, entityClass);
	}

	@Override
	public Boolean login(String userName, String password) throws AccountNotFoundException {
		Optional<User> person = userRepository.findByUserName(userName);
		if (person.isEmpty()) {
			throw new AccountNotFoundException("User Not found");
		}
		return BCrypt.checkpw(password, person.get().getPassword());
	}

	@Override
	public List<User> findByDocumentTypeId(Integer documentTypeId) {
		return userRepository.findAllByDocumentType(documentTypeId);
	}

	@Override
	@Cacheable("allpeople")
	public ResponseEntity<DefaultResponse<User>> findAll() {
		log.info("consumig real service");
		//return super.findAll();
		return super.findAll();
	}

	@Override
	public ResponseEntity<DefaultResponse<User>> findById(Integer id) {
		User person = userRepository.findById(id).orElse(new User());
		log.warn("Siu");
		Predicate<User> isOld = personL -> personL.getDocumentNumber().equals(3l);
		if (isOld.test(person)) {
			return DefaultResponse.onThrow200Response(Collections.singletonList(person));
		}
		return DefaultResponse.onThrow200Response(Collections.singletonList(person));
	}

	@Override
	public List<String> onConcurrentEndPoint() {
		return Flux.range(0, 10).flatMap(i -> iPeopleIntegration.onGetUserById(78).map(Object::toString))
				.collect(Collectors.toList()).block();
	}

	@Override
	public Flux<String> onConcurrentEndPoint2() {
		return Flux.range(0, 10).flatMap(i -> iPeopleIntegration.onGetUserById(78).map(Object::toString)).collectList()
				.flatMapMany(Flux::fromIterable);
	}

	@Override
	public ResponseEntity<DefaultResponse<User>> test() {
		// TODO Auto-generated method stub
		return DefaultResponse.onThrow200Response(Collections.emptyList());
	}

}