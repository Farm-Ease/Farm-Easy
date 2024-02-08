package com.app.service;

import java.util.List;

import javax.validation.Valid;

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
	public ApmcAppointmentDTO updateAppoitnment(Long appointmentId, @Valid ApmcAppointmentDTO apptDto) {
		ApmcAppointment appt = appointmentDao.findById(appointmentId).orElseThrow(()->new ResourceNotFoundException("Invalid appt id"));
		appt.setDate(apptDto.getDate());
		appt.setQuantity(apptDto.getQuantity());
		//appt.setProducts(apptDto.getProducts());
		appt.setTransaction(apptDto.getTransaction());
		return mapper.map(appt, ApmcAppointmentDTO.class);
	}





	@Override
	public FarmerDTO updateFarmer(Long farmerId, @Valid FarmerDTO farmerDto) {
		// TODO Auto-generated method stub
		Farmer  farmer = farmerDao.findById(farmerId).orElseThrow(()-> new ResourceNotFoundException("Invalid farmer id"));
		farmer.setName(farmerDto.getName());
		farmer.setNumber(farmerDto.getNumber());
		farmer.setAdhaar(farmerDto.getAdhaar());
		farmer.setState(farmerDto.getState());
		farmer.setDistrict(farmerDto.getDistrict());
		farmer.setVillage(farmerDto.getVillage());
		
		return mapper.map(farmer, FarmerDTO.class);
	}
	
	
	
	
	

}
