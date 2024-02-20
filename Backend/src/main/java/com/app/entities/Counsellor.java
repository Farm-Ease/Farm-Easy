package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Counsellor extends BaseEntity {

	@Column(length = 30)
	private String name;
	@Column(length = 30, unique = true)
	private String email;
	private String mobileNo;
	private String state;
	private String district;
	private String village;
	private String password;
}
