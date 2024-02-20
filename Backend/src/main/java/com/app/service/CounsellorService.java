package com.app.service;

import com.app.dto.CounsellorDTO;

public interface CounsellorService {
	CounsellorDTO updateCounsellor(Long id,CounsellorDTO counsellorDTO);
	CounsellorDTO getCounsellor(Long id);
	CounsellorDTO getCounsellorByDistrict(String district);
}
