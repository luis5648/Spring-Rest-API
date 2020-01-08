package com.luis.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luis.demo.model.User;

public interface IUserRepo extends JpaRepository<User, Integer> {
	
}
