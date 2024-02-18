package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "admin")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Admin extends BaseEntity{
	@Column(length = 30)
	private String name;
	@Column(length = 30, unique = true)
	private String email;
	@Column(nullable = false)
	private String password;
}
