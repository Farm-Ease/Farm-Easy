package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Signup {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank
	private String name;
	@NotBlank
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY) //de-ser.
	private String password;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String confirmPassword;
	@NotBlank
	private String adhaar;
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
