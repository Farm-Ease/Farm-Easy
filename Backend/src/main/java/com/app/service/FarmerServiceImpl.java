package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.aspectj.weaver.NewConstructorTypeMunger;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ApmcAppointmentDao;
import com.app.dao.FarmerDao;
import com.app.dto.ApiResponse;
import com.app.dto.ApmcAppointmentDTO;
import com.app.dto.CounsellorDTO;
import com.app.dto.FarmerAppointmentDTO;
import com.app.dto.FarmerDTO;
import com.app.entities.ApmcAppointment;
import com.app.entities.Counsellor;
import com.app.entities.Farmer;

@Service
@Transactional
public class FarmerServiceImpl implements FarmerService{

	@Autowired
	private FarmerDao farmerDao;
	
	@Autowired
	private ApmcAppointmentDao appointmentDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public FarmerAppointmentDTO addAppointment(FarmerAppointmentDTO farmerApptDTO) {
		// TODO Auto-generated method stub
		ApmcAppointment apptEntity = mapper.map(farmerApptDTO, ApmcAppointment.class);
		ApmcAppointment persistentAppt = appointmentDao.save(apptEntity);
		return mapper.map(persistentAppt, FarmerAppointmentDTO.class);
	}
	
	



	@Override
	public ApiResponse deleteAppointment(Long appointmentId) {
		// TODO Auto-generated method stub
		ApmcAppointment appt = appointmentDao.findById(appointmentId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid appt id"));
		appointmentDao.delete(appt);
		return new ApiResponse("Appointment with id"+appt.getId()+"deleted....");
	}





	@Override
	public List<FarmerDTO> getFarmerByName(String farmerName) {
		List<Farmer> farmers = farmerDao.findAllByName(farmerName);
		
		if(!farmers.isEmpty()) {
			return farmerDao.findAll()
			.stream()
			.map(farmer -> mapper.map(farmer, FarmerDTO.class))
			.collect(Collectors.toList());
		}
		throw new ResourceNotFoundException("No such farmer Exists !");
	}
	
	
	

}
