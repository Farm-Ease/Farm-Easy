package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CounsellorDao;
import com.app.dto.CounsellorDTO;
import com.app.entities.Counsellor;

@Service
@Transactional
public class CounsellorServiceImpl implements CounsellorService {
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CounsellorDao counsellorDao;
	
	
	@Override
	public CounsellorDTO updateCounsellor(Long id, CounsellorDTO counsellorDTO) {
		Counsellor counsellor = counsellorDao.findById(id).orElseThrow(()->new ResourceNotFoundException("Invalid Counsellor Id"));
		mapper.map(counsellorDTO, counsellor);
		counsellorDTO.setId(id);
		return counsellorDTO;
	}


	@Override
	public CounsellorDTO getCounsellorByDistrict(String district) {
		return mapper.map(
				counsellorDao.findByDistrict(district).orElseThrow(() -> new ResourceNotFoundException("Invalid District name!!!!")),
				CounsellorDTO.class);
		
	}

}
