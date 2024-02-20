package com.app.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponse;
import com.app.dto.ApmcAppointmentDTO;
import com.app.dto.FarmerAppointmentDTO;
import com.app.dto.FarmerDTO;
import com.app.dto.Signup;



public interface FarmerService {

	ApmcAppointmentDTO addAppointment(ApmcAppointmentDTO apptDTO);

	ApiResponse deleteAppointment(Long appointmentId);

	ApmcAppointmentDTO updateAppoitnment(Long appointmentId, @Valid ApmcAppointmentDTO apptDto);

	FarmerDTO updateFarmer(Long farmerId, @Valid FarmerDTO farmerDto);
	
	List <FarmerDTO> getFarmerByName(String farmerName);

	FarmerDTO addNewFarmer(@Valid FarmerDTO farmerDto);


	Signup userRegistration(@Valid Signup dto);

}
