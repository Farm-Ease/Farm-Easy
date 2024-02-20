package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.aspectj.weaver.NewConstructorTypeMunger;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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
import com.app.dto.Signup;
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
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public ApmcAppointmentDTO addAppointment(ApmcAppointmentDTO apptDTO) {
		Farmer farmer = farmerDao.findById(apptDTO.getFarmer_id())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid farmer Id!!!"));
		ApmcAppointment apptEntity = mapper.map(apptDTO, ApmcAppointment.class);
		
		farmer.addAppointment(apptEntity);
		farmerDao.save(farmer);
		ApmcAppointmentDTO appDto = mapper.map(apptEntity, ApmcAppointmentDTO.class);
		appDto.setFarmer_id(apptDTO.getFarmer_id());
		return appDto;
	}

	
	@Override
	public ApiResponse deleteAppointment(Long appointmentId) {
		ApmcAppointment appt = appointmentDao.findById(appointmentId).
				orElseThrow(()-> new ResourceNotFoundException("Invalid appt id"));
		appointmentDao.delete(appt);
		return new ApiResponse("Appointment with id"+appt.getId()+"deleted....");
	}


	public ApmcAppointmentDTO updateAppoitnment(Long appointmentId, @Valid ApmcAppointmentDTO apptDto) {
		ApmcAppointment appt = appointmentDao.findById(appointmentId).orElseThrow(()->new ResourceNotFoundException("Invalid appt id"));
		appt.setDate(apptDto.getDate());
		appt.setQuantity(apptDto.getQuantity());
		return mapper.map(appt, ApmcAppointmentDTO.class);
	}


	@Override
	public FarmerDTO updateFarmer(Long farmerId, @Valid FarmerDTO farmerDto) { 
		Farmer  farmer = farmerDao.findById(farmerId).orElseThrow(()-> new ResourceNotFoundException("Invalid farmer id"));
		mapper.map(farmerDto, farmer);
		farmerDto.setId(farmerId);
		return farmerDto;
	}
	
	
	
	@Override
	public List<FarmerDTO> getFarmerByName(String farmerName) {
		List<Farmer> farmers = farmerDao.findAllByName(farmerName);
		if(!farmers.isEmpty()) {
			return farmers
			.stream()
			.map(farmer -> mapper.map(farmer, FarmerDTO.class))
			.collect(Collectors.toList());
		}
		
		throw new ResourceNotFoundException("No such farmer Exists !");
	}


	@Override
	public FarmerDTO addNewFarmer(@Valid FarmerDTO farmerDto) {
		Farmer farmerEntity = mapper.map(farmerDto, Farmer.class);
		Farmer persistFarmer = farmerDao.save(farmerEntity);
		return mapper.map(persistFarmer, FarmerDTO.class);
	}


	@Override
	public Signup userRegistration(@Valid Signup reqdto) {
		// TODO Auto-generated method stub
		Farmer farmer = mapper.map(reqdto, Farmer.class);
		farmer.setPassword(encoder.encode(farmer.getPassword()));//pwd : encrypted using SHA
		Farmer persistFarmer = farmerDao.save(farmer);
		return mapper.map(persistFarmer, Signup.class);
	}

	
		
}
