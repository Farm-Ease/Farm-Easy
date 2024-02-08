package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Farmer;

public interface FarmerDao extends JpaRepository<Farmer,Long>{
	List <Farmer> findAllByName(String name);
}
