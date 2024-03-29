package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Product extends BaseEntity {
	@Column(name = "Rate",nullable = false)
	private Double rate;
	
	@Column(name = "Product_Name",length = 20,nullable = false)
	private String productName;
	
	@Column(length = 20)
	private String image;
	
	@Column(nullable = false)
	private Double quantity;
	
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "apmcAppointment_id")
//	private ApmcAppointment apmcAppointment;
}
