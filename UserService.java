package com.omega.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omega.entity.User;
import com.omega.repo.UserRepo;

@Service
public class UserService {
@Autowired
private UserRepo userRepo;

public User register(User user) {
	return userRepo.save(user);
}
public User loginUser(User useRequest) {
    User response = userRepo.findByEmailAndPassword(useRequest.getEmail(), useRequest.getPassword());
    return response;
    }

}
