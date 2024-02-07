package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ApmcAppointment;

public interface ApmcAppointmentDao extends JpaRepository<ApmcAppointment, Long>{
	
	
}
