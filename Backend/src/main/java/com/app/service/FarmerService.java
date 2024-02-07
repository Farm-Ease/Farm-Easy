package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponse;
import com.app.dto.ApmcAppointmentDTO;
import com.app.dto.FarmerAppointmentDTO;
import com.app.dto.FarmerDTO;


public interface FarmerService {

	FarmerAppointmentDTO addAppointment(FarmerAppointmentDTO apptDTO);


	ApiResponse deleteAppointment(Long appointmentId);

}
