package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Crop extends BaseEntity {
	@Column(length = 30)
	private String khraifCrop;
	
	@Column(length = 30)
	private String rabiCrop;
	
	@Column(length = 30)
	private String zaidCrop;
	
//	@Enumerated(EnumType.STRING)
//	@Column(name = "Crop_Season",length = 30,nullable = false)
//	private CropSeason cropSeason;

	@Column(name = "khraif_crop_quantity")
	private Double khraifCropQuantity;
	
	@Column(name = "rabi_crop_quantity")
	private Double rabiCropQuantity;
	
	@Column(name = "zaid_crop_quantity")
	private Double zaidCropQuantity;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "farmer_id")
	private Farmer farmer;
}
