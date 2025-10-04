package com.omega.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omega.service.UserService;
import com.omega.entity.User;

@RestController
@RequestMapping("/user/api")
public class UserController {
@Autowired
private UserService userService;

@CrossOrigin
@PostMapping("/register")
public ResponseEntity<User> register(@RequestBody User user) {
    return new ResponseEntity<User>(userService.register(user), HttpStatus.CREATED);
}
@CrossOrigin
@PostMapping("/login")
public ResponseEntity<User> loginUser(@RequestBody User useRequest) {
    return new ResponseEntity<User>(userService.loginUser(useRequest), HttpStatus.OK);
}

}
