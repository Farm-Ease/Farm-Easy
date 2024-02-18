package com.app.service;

import com.app.dto.CounsellorDTO;

public interface CounsellorService {
	CounsellorDTO updateCounsellor(Long id,CounsellorDTO counsellorDTO);

	CounsellorDTO getCounsellorByDistrict(String district);
}
