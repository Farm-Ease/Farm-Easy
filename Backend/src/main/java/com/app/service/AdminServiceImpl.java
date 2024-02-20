package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AdminDao;
import com.app.dao.ApmcAppointmentDao;
import com.app.dao.CounsellorDao;
import com.app.dao.FarmerDao;
import com.app.dao.ProductDao;
import com.app.dto.AdminDTO;
import com.app.dto.ApiResponse;
import com.app.dto.ApmcAppointmentDTO;
import com.app.dto.CounsellorDTO;
import com.app.dto.FarmerDTO;
import com.app.entities.Admin;
import com.app.entities.ApmcAppointment;
import com.app.entities.Counsellor;
import com.app.entities.Product;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private CounsellorDao counsellorDao;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private FarmerDao farmerDao;
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private ApmcAppointmentDao apmcAppointmentDao;

	@Override
	public List<CounsellorDTO> getAllCounsellor() {
		return counsellorDao.findAll()
				.stream()
				.map(counsellor -> mapper.map(counsellor, CounsellorDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public CounsellorDTO addNewCounsellor(CounsellorDTO counsellorDto) {
		Counsellor counsellorEntity = mapper.map(counsellorDto, Counsellor.class);
		Counsellor persistentCounsellor = counsellorDao.save(counsellorEntity);
		return mapper.map(persistentCounsellor, CounsellorDTO.class);
	}
	
	@Override
	public ApiResponse deleteCounsellor(Long empId) {
		Counsellor counsellor = counsellorDao.findById(empId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid emp id"));
		counsellorDao.delete(counsellor);
		return new ApiResponse("Counsellor with ID " + counsellor.getId() + " deleted....");
	}
	
	@Override
	public List<FarmerDTO> getAllFarmers() {
		return farmerDao.findAll()
				.stream()
				.map(farm -> mapper.map(farm, FarmerDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public AdminDTO addNewAdmin(@Valid AdminDTO adminDTO) {
		Admin adminEntity = mapper.map(adminDTO, Admin.class);
		Admin persistentAdmin = adminDao.save(adminEntity);
		return mapper.map(persistentAdmin, AdminDTO.class);
	}

	@Override
	public List<ApmcAppointmentDTO> getAllAppointment() {
		List<ApmcAppointment> apmcAppointments = apmcAppointmentDao.findAll();
		List<ApmcAppointmentDTO> result = new ArrayList<ApmcAppointmentDTO>();
		for(ApmcAppointment apmcApp : apmcAppointments) {
			ApmcAppointmentDTO apmcdto = mapper.map(apmcApp, ApmcAppointmentDTO.class);
			apmcdto.setFarmer_id(apmcApp.getFarmer().getId());
			result.add(apmcdto);
		}
		return result;
	}

	@Override
	public List<Product> getAllProducts() {
		return productDao.findAll()
				.stream()
				.map(product -> mapper.map(product, Product.class))
				.collect(Collectors.toList());
	}
}
