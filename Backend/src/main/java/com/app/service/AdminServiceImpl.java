package com.app.service;

import java.util.List;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AdminDao;
import com.app.dao.CounsellorDao;
import com.app.dto.ApiResponse;
import com.app.dto.CounsellorDTO;
import com.app.entities.Counsellor;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private CounsellorDao counsellorDao;

	@Autowired
	private ModelMapper mapper;

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
		Counsellor persistentDept = counsellorDao.save(counsellorEntity);
		return mapper.map(persistentDept, CounsellorDTO.class);
	}
	
	@Override
	public ApiResponse deleteCounsellor(Long empId) {
		Counsellor counsellor = counsellorDao.findById(empId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid emp id"));
		counsellorDao.delete(counsellor);
		return new ApiResponse("Counsellor with ID " + counsellor.getId() + " deleted....");
	}
}
