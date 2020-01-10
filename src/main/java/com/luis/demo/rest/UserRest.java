package com.luis.demo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.luis.demo.repo.IUserRepo;
import com.luis.demo.model.User;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserRest {
	
	@Autowired
	private IUserRepo repo;
	
	
	
	@GetMapping
	public List<User> users() {
		
		return repo.findAll();	
	}
	
	@PostMapping
	public void insertar(@RequestBody User us) {
		
		repo.save(us);
	}
	
	@PutMapping
	public void modificar(@RequestBody User us) {
		
		repo.save(us);
	}
	
	@DeleteMapping(value = "/{id}")
	public void eliminar(@PathVariable("id") Integer id) {
		repo.deleteById(id);
	}
} 
