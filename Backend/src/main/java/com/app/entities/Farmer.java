package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

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
	
	
	//One to many association betn farmer and crops  -- unidirectional
	@OneToMany(mappedBy = "farmer",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Crop> cropList = new ArrayList<>();
	
	
	//one to Many association betn Farmer <--> APMCAppointement -- bidirectional
	@OneToMany(mappedBy = "farmer", cascade = CascadeType.ALL, orphanRemoval = true /* , fetch = FetchType.EAGER */ )
	private List<ApmcAppointment> appointmentList = new ArrayList<>();
	
	public void addAppointment(ApmcAppointment appointment) {
		appointmentList.add(appointment);//farmer<--->ApmcAppointment
		appointment.setFarmer(this);
	}
	
	public void removeAppointment(ApmcAppointment appointment) {
		appointmentList.remove(appointment);
		appointment.setFarmer(null);
	}
	
	
	
}
