package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApmcAppointmentDTO;
import com.app.dto.CounsellorDTO;
import com.app.dto.FarmerAppointmentDTO;
import com.app.dto.FarmerDTO;
import com.app.service.CounsellorService;
import com.app.service.FarmerService;


@RestController
@RequestMapping("/farmer")
@Validated
@CrossOrigin
public class FarmerController {
	
	@Autowired
	private FarmerService farmerService;
	
	@Autowired
	private CounsellorService counsellorService;
	
	@PostMapping("/farmer")
	public ResponseEntity<?> addNewFarmer(@RequestBody @Valid FarmerDTO farmerDto) {
		System.out.println("in add farmer " + farmerDto);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(farmerService.addNewFarmer(farmerDto));
	}
	
	@PutMapping("/UpdateFarmer/{farmerId}")//update farmer
	public ResponseEntity<?> updateFarmer(@PathVariable Long farmerId, @RequestBody @Valid FarmerDTO farmerDto){
		System.out.println("In update farmer "+farmerId+" "+farmerDto);
		return ResponseEntity.ok(farmerService.updateFarmer(farmerId,farmerDto));
	}
	
	@PostMapping("/appointment")
	public ResponseEntity<?> bookAppointment(@RequestBody @Valid ApmcAppointmentDTO apptDTO){
		System.out.println("Inside book appt "+apptDTO);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(farmerService.addAppointment(apptDTO));
				
	}
	
	@PutMapping("/updateAppointment/{appointmentId}")
	public ResponseEntity<?> updateAppointment(@PathVariable Long appointmentId,@RequestBody @Valid ApmcAppointmentDTO apptDto){
		System.out.println("In update appt "+appointmentId+" "+ apptDto);
		return ResponseEntity.ok(farmerService.updateAppoitnment(appointmentId,apptDto));
	}
	
	@DeleteMapping("/deleteFarmer/{appointmentId}")
	public ResponseEntity<?> deleteAppointment(@PathVariable Long appointmentId) {
		System.out.println("in delete counsellor " + appointmentId);
		return ResponseEntity.ok(farmerService.deleteAppointment(appointmentId));
	}
	
	@GetMapping("/getCounsellor/{district}")
	public ResponseEntity<?> getCounsellorByDistrict(@PathVariable String district){
		return ResponseEntity.ok(counsellorService.getCounsellorByDistrict(district));

}
}
