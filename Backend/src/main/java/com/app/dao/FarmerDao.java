package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Farmer;

public interface FarmerDao extends JpaRepository<Farmer,Long>{
	List <Farmer> findAllByName(String name);
	
	Optional<Farmer> findByEmail(String email);

}
