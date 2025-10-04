package com.omega.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.omega.entity.User;

public interface UserRepo extends JpaRepository<User, Long> {
	User findByEmailAndPassword(String email, String password);


}
