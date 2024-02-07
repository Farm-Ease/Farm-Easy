package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GenerationType;

import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Crop extends BaseEntity {
	@Column(name = "Crop_Name",length = 30,nullable = false)
	private String cropNameString;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "Crop_Season",length = 30,nullable = false)
	private CropSeason cropSeason;
	
	@Column(name = "Quantity",nullable = false)
	private Long quantity;
	
}
