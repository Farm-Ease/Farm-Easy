package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CounsellorDTO;
import com.app.service.CounsellorService;
import com.app.service.FarmerService;

@RestController
@RequestMapping("/counsellor")
//@Validated
public class CounsellorController {
	@Autowired 
	private CounsellorService counsellorService;
	
	@Autowired
	private FarmerService farmerService;
	
//	@GetMapping("/getFarmer/{farmer_name}")
//	public ResponseEntity<?> getFarmerInfoByName(@PathVariable String farmer_name){
//		return ResponseEntity.ok(farmerService.getFarmerByName(farmer_name));
//	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateCounsellor(@PathVariable Long id ,  @RequestBody @Valid CounsellorDTO counsellorDTO){
		return ResponseEntity.ok(counsellorService.updateCounsellor(id, counsellorDTO));
	}
}
