package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Counsellor;


public interface CounsellorDao extends JpaRepository<Counsellor, Long>{

	Optional<Counsellor> findByDistrict(String district);
}
