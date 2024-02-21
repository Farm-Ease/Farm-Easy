package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Orders extends BaseEntity{
	private Integer farmer_id;
	private Integer total;
	private LocalDate date;
	private Integer totalQuantity;
}
