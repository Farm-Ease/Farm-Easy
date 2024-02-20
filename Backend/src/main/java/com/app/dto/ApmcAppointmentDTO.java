package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.entities.Farmer;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ApmcAppointmentDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@JsonProperty
	//(access = Access.READ_WRITE)
	private Long farmer_id;
//	@NotBlank
//	private String transaction;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	@NotNull
	private Double quantity;
	@NotBlank
	private String crop;
	
	 
	
}
