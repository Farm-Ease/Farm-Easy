package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrdersDTO;
import com.app.service.OrderService;

@RestController
@RequestMapping("/orders")
@Validated
@CrossOrigin
public class OrdersController {
	
	@Autowired
	private OrderService orderService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addOrder(@RequestBody @Valid OrdersDTO ordersDTO){
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(orderService.addOrder(ordersDTO));
	}		
}
