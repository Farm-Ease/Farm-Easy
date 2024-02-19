package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import com.app.entities.*;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
//@ToString(exclude = {"farmer"}, callSuper = true)
@ToString
public class ApmcAppointment extends BaseEntity {
	
//	@Enumerated(EnumType.STRING)
//	@Column(nullable = false)
//	private Transaction transaction;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	private Double quantity;
	
//	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "farmer_id")
	private Farmer farmer;
	
//	@OneToMany(mappedBy = "apmcAppointment",cascade = CascadeType.ALL, orphanRemoval = true /* , fetch = FetchType.EAGER */ )
//	private List<Crop> crops = new ArrayList<>();
	
//	@OneToOne
//	@JoinColumn(name="crop_id")
	private String crop;
}
