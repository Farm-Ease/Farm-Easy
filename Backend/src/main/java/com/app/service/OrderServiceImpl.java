package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.OrdersDao;
import com.app.dto.OrdersDTO;
import com.app.entities.Orders;

@Service
@Transactional
public class OrderServiceImpl implements OrderService{

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private OrdersDao ordersDao;
	
	
	@Override
	public OrdersDTO addOrder(OrdersDTO ordersDTO) {
		Orders ordersEntity = mapper.map(ordersDTO, Orders.class);
		Orders persistentOrders = ordersDao.save(ordersEntity);
		return mapper.map(persistentOrders, OrdersDTO.class);
	}

}
