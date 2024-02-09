package com.app.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProductDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@NotBlank
	private String productName;
	
	@NotNull
	private Double rate;
	
	@NotNull
	private Double quantity;

}
