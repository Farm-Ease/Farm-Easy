package com.app.service;

import java.util.List;
import javax.validation.Valid;

import com.app.dto.AdminDTO;
import com.app.dto.ApiResponse;
import com.app.dto.ApmcAppointmentDTO;
import com.app.dto.CounsellorDTO;
import com.app.dto.FarmerDTO;

public interface AdminService {
	List<CounsellorDTO> getAllCounsellor();
	
	List<ApmcAppointmentDTO> getAllAppointment();

	CounsellorDTO addNewCounsellor(@Valid CounsellorDTO counsellorDto);
	
	AdminDTO addNewAdmin(@Valid AdminDTO adminDTO);

	ApiResponse deleteCounsellor(Long counsellorId);
	
	List<FarmerDTO> getAllFarmers();
}
