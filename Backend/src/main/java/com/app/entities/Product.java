package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
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
	private String product_nameString;
	
	@Column(nullable = false)
	private Double quantity;
}
