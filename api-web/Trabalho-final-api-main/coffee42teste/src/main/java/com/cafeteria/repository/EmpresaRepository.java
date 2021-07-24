package com.cafeteria.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cafeteria.model.Empresa;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {	
			
		Optional<Empresa> findById(Long id);
		List<Empresa> findByNomeContaining(String nome);
	}

