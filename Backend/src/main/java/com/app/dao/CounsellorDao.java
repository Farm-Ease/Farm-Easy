package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Counsellor;

public interface CounsellorDao extends JpaRepository<Counsellor, Long>{

}
