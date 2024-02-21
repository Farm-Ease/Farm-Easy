package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Crop;

public interface CropDao extends JpaRepository<Crop, Long> {

}
