package com.app.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.entities.Farmer;

public class CustomFarmerDetails implements UserDetails {
	private Farmer farmer;
	
	public CustomFarmerDetails(Farmer farmer) {
		// TODO Auto-generated constructor stub
		this.farmer = farmer;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of(new 
				SimpleGrantedAuthority(farmer.toString()));
	
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return farmer.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return farmer.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
