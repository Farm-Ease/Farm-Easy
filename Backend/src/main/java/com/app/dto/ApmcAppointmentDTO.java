package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ApmcAppointmentDTO {
	
	@Column(nullable = false)
	private String transaction;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	private Double quantity;
	 
	
}
