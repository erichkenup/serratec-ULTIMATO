package com.cafeteria.model;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "usuario")
@SequenceGenerator(name = "generator_usuario", sequenceName = "sequence_usuario", initialValue = 1, allocationSize = 1)
public class Usuario implements UserDetails{


	private static final long serialVersionUID = 6782569577224744716L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator_usuario")
	private Long id;
	
	@Column(nullable = false, length = 255, unique = true)
	private String email; 
	
	@Column(nullable = false, length = 60, unique = true)
	private String username;
	
    @Column(nullable = false, length = 255)
	private String senha;
	
	@Column(nullable = false, length = 60)
	private String nome;
	
	@Column(nullable = false, length = 11, unique = true)
	private String cpf;
	
	@Column(nullable = false, length = 60)
	private String telefone;
	
//	@Column
//	private Date dataNascimento;
	
	public Usuario() {}
	
	
	public Usuario(String email, String username, String senha, String nome, String cpf, String telefone) {
		super();
		this.email = email;
		this.username = username;
		this.senha = senha;
		this.nome = nome;
		this.cpf = cpf;
		this.telefone = telefone;
	}
	
	public Usuario(Long id, String email, String username, String senha, String nome, String cpf, String telefone) {
	
		this.id = id;
		this.email = email;
		this.username = username;
		this.senha = senha;
		this.nome = nome;
		this.cpf = cpf;
		this.telefone = telefone;
//		this.dataNascimento = dataNascimento;
		
	}



	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getSenha() {
		return senha;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getCpf() {
		return cpf;
	}
	
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	public String getTelefone() {
		return telefone;
	}
	
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getPassword() {
		return senha;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonLocked() {
	
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isCredentialsNonExpired() {
	
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isEnabled() {

		return true;
	}
	

	
}
