package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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
public class CropDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	//@JsonProperty
	private Long farmer_id;
	
	//@NotBlank
	private String khraifCrop;
	
	//@NotBlank
	private String rabiCrop;
	
	
	private String zaidCrop;
	
	//@NotNull
	private Double khraifCropQuantity;
	
	//@NotNull
	private Double rabiCropQuantity;
	

	private Double zaidCropQuantity;
}
