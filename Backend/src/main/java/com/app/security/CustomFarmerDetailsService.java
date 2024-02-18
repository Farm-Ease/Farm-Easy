package com.app.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.FarmerDao;
import com.app.entities.Farmer;

@Service
@Transactional
public class CustomFarmerDetailsService implements UserDetailsService{
	@Autowired
	private FarmerDao farmerDao;
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Farmer farmer = farmerDao.findByEmail(email)
				.orElseThrow(()->new UsernameNotFoundException("Email Not Found"));
		return new CustomFarmerDetails(farmer);
	}

}
