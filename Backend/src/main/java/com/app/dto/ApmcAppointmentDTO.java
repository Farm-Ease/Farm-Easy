package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ApmcAppointmentDTO {
	@JsonProperty(access = Access.WRITE_ONLY)
	private String farmerId;
	@NotBlank
	private String transaction;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	@NotNull
	private Double quantity;
	
	
	 
	
}
