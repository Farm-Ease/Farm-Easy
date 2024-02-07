package com.app.service;

import java.util.List;
import javax.validation.Valid;
import com.app.dto.ApiResponse;
import com.app.dto.CounsellorDTO;

public interface AdminService {
	List<CounsellorDTO> getAllCounsellor();

	CounsellorDTO addNewCounsellor(@Valid CounsellorDTO counsellorDto);

	ApiResponse deleteCounsellor(Long counsellorId);
}
