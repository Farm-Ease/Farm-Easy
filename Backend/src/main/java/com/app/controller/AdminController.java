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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.CounsellorDTO;
import com.app.service.AdminService;

@RestController
@RequestMapping("/admin")
@Validated
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@GetMapping
	public ResponseEntity<?> getAllCounsellor() {
		System.out.println("in get all counsellor" );
		return ResponseEntity
				.ok(adminService.getAllCounsellor());
	}
	
	@PostMapping
	public ResponseEntity<?> addNewDepartment(@RequestBody @Valid CounsellorDTO counsellorDto) {
		System.out.println("in add counsellor " + counsellorDto);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(adminService.addNewCounsellor(counsellorDto));
	}
	
	@DeleteMapping("/{counsellorId}")
	public ResponseEntity<?> deleteCounsellor(@PathVariable Long counsellorId) {
		System.out.println("in delete counsellor " + counsellorId);
		return ResponseEntity.ok(adminService.deleteCounsellor(counsellorId));
	}
}
