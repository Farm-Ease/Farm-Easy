package com.app.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrdersDTO {
	@JsonProperty
	private Long id;
	private Integer farmer_id;
	private Integer total;
	private Integer totalQuantity;
	private LocalDate date;
}
