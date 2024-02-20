package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FarmerDTO {
	//@JsonProperty(access = Access.READ_ONLY)
	@JsonProperty
	private Long id;
	@NotBlank
	private String name;
	@NotBlank
	private String email;
	//@JsonProperty(access = Access.WRITE_ONLY) //de-ser.
	private String password;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String confirmPassword;
	@NotBlank
	private String aadhaar;
	@NotBlank
	private String village;
	@NotBlank
	private String district;
	@NotBlank
	private String state;
	@NotBlank
	private String number;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;	
}
