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

import com.app.dto.AdminDTO;
import com.app.dto.CounsellorDTO;
import com.app.dto.ProductDTO;
import com.app.service.AdminService;
import com.app.service.ProductService;

@RestController
@RequestMapping("/admin")
@Validated
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private ProductService productService;
	
	@PostMapping("/addAdmin")
	public ResponseEntity<?> addNewAdmin(@RequestBody @Valid AdminDTO adminDTO) {
		System.out.println("in add admin " + adminDTO);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(adminService.addNewAdmin(adminDTO));
	}
	
	@GetMapping("/getFarmers")
	public ResponseEntity<?> getAllFarmers() {
		System.out.println("in get all farmers" );
		return ResponseEntity
				.ok(adminService.getAllFarmers());
	}
	
	@GetMapping("/getAppointments")
	public ResponseEntity<?> getAllAppointment() {
		System.out.println("in get all appointment" );
		return ResponseEntity
				.ok(adminService.getAllAppointment());
	}
	
	@GetMapping("/getCounsellors")
	public ResponseEntity<?> getAllCounsellor() {
		System.out.println("in get all counsellor" );
		return ResponseEntity
				.ok(adminService.getAllCounsellor());
	}
	
	@PostMapping("/addCounsellor")
	public ResponseEntity<?> addNewCounsellor(@RequestBody @Valid CounsellorDTO counsellorDto) {
		System.out.println("in add counsellor " + counsellorDto);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(adminService.addNewCounsellor(counsellorDto));
	}
	
	@DeleteMapping("/deleteCounsellor/{counsellorId}")
	public ResponseEntity<?> deleteCounsellor(@PathVariable Long counsellorId) {
		System.out.println("in delete counsellor " + counsellorId);
		return ResponseEntity.ok(adminService.deleteCounsellor(counsellorId));
	}
	
	@PostMapping("/addProducts")
	public ResponseEntity<?> addNewProduct(@RequestBody @Valid ProductDTO productDTO) {
		System.out.println("in add product " + productDTO);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(productService.addNewProduct(productDTO));
	}
	
	@PutMapping("/updateProducts/{productId}")
	public ResponseEntity<?> updateProduct(@PathVariable Long productId,
			@RequestBody @Valid ProductDTO productDTO) {
		System.out.println("in update product " +productId+" "+ productDTO);		
		return ResponseEntity.
				ok(productService.updateProduct(productId, productDTO));
	}
}
