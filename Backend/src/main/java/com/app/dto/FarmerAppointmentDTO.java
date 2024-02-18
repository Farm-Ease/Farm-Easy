package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.entities.ApmcAppointment;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FarmerAppointmentDTO {

//	@JsonProperty(access = Access.READ_ONLY)//deser
	private Long farmerId;
//	@JsonProperty(value = "district")
//	private String district;
//	@NotBlank
//	private String name;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	private Double quantity;
	private Long cropId;
	@Column(nullable = false)
	private String transaction;
	//private List<ApmcAppointment> appointmentList; 
	
}
