package com.cafeteria.security;

import java.util.Optional;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cafeteria.model.Usuario;
import com.cafeteria.repository.UsuarioRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{

	@Autowired
	private UsuarioRepository repositorioUsuario;
	
	@Override
	public UserDetails loadUserByUsername(String username) {
		Usuario usuario = getUser(() -> repositorioUsuario.findByUsername(username));
		return usuario;
	}
	
	public UserDetails pegarUsuarioPorId(Long id) {
		Usuario usuario = getUser(() -> repositorioUsuario.findById(id));
		return usuario;
	}
	
	
	private Usuario getUser(Supplier<Optional<Usuario>> supplier) {
		return supplier.get().orElseThrow(() -> 
				new UsernameNotFoundException("Usuário não encontrado"));
	}

}
