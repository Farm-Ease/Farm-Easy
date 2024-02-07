package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import antlr.collections.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="farmer")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude ={"croplist","appointmentlist"})
public class Farmer extends BaseEntity{
	
	@Column(length = 30)
	private String name;
	@Column(length = 30, unique = true) // =>unique
	private String email;
	@Column(length=10,nullable=false)
	private String number;
	@Column(length=12,nullable = false) // =>NOT NULL
	private String adhaar;
	@Column(length=30,nullable = false) // =>NOT NULL
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	@Column(length=30,nullable = false) // =>NOT NULL
	private String state;
	@Column(length=30,nullable = false) // =>NOT NULL
	private String district;
	@Column(length=30,nullable = false) // =>NOT NULL
	private String village;
	@Column(length=30,nullable = false) // =>NOT NULL
	private String password;
	
	
	//One to many association betn farmer and crops  -- unidir
	@OneToMany(mappedBy = "crop", cascade = CascadeType.ALL, orphanRemoval = true /* , fetch = FetchType.EAGER */ )
	private List<Crop> croplist = new ArrayList<>();
	
	
	//one to Many association betn Farmer --> APMCAppointement -- bidir
	@OneToMany(mappedBy = "apmcappointment", cascade = CascadeType.ALL, orphanRemoval = true /* , fetch = FetchType.EAGER */ )
	private List<ApmcAppointment> appointmentlist = new ArrayList<>();
	
	public void addAppointment(ApmcAppointment appointment) {
		appointmentlist.add(appointment);//farmer-->apmc
		appointment.setFarmer(this);
	}
	
	public void removeAppointment(ApmcAppointment appoitment) {
		appointmentlist.remove(appointment);
		appointment.setFarmer(null);
	}
	
	
	
}
