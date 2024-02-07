package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import com.app.entities.*;
@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = {"farmer"}, callSuper = true)
public class ApmcAppointment extends BaseEntity {
	
	@Column(nullable = false)
	private String transaction;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	private Double quantity;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "farmer_id")
	private Farmer farmer;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true /* , fetch = FetchType.EAGER */ )
	private List<Product> products = new ArrayList<>();
	
}
