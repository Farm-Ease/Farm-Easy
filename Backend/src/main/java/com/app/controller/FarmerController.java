package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApmcAppointmentDTO;
import com.app.dto.FarmerAppointmentDTO;
import com.app.service.FarmerService;


@RestController
@RequestMapping("/farmer")
@Validated
public class FarmerController {
	
	@Autowired
	private FarmerService farmerService;
	
	
	@PostMapping
	public ResponseEntity<?> bookAppointment(@RequestBody @Valid FarmerAppointmentDTO apptDTO){
		System.out.println("Inside book appt "+apptDTO);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(farmerService.addAppointment(apptDTO));
				
	}
	
	
	@DeleteMapping("/{appointmentId}")
	public ResponseEntity<?> deleteAppointment(@PathVariable Long appointmentId) {
		System.out.println("in delete counsellor " + appointmentId);
		return ResponseEntity.ok(farmerService.deleteAppointment(appointmentId));
	}

}