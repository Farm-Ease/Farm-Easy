package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.ApmcAppointment;
import com.app.entities.Farmer;

public interface ApmcAppointmentDao extends JpaRepository<ApmcAppointment, Long>{
	
	//@Query("SELECT a FROM apmc_appointment a WHERE a.farmer_id = :farmer_id")
	List<ApmcAppointment> findByFarmer(Farmer farm);
}
