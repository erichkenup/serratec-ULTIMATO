package com.cafeteria.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cafeteria.exception.ResourceNotFoundException;
import com.cafeteria.model.Endereco;
import com.cafeteria.repository.EnderecoRepository;



@Service
public class EnderecoService {
	


	@Autowired
	private EnderecoRepository repositorioEndereco;
	

	public List<Endereco> obterTodos() {
		return repositorioEndereco.findAll();
	}
	
	
	public Optional<Endereco> obterPorId(Long id) {
		 Optional<Endereco> Endereco = repositorioEndereco.findById(id);	 
		
		 if(Endereco.isEmpty()) {
			throw new ResourceNotFoundException("Endereco não encontrado!");
		}
		 
		return Endereco;
	}
	
	
	public Endereco adicionar(Endereco Endereco) {
		Endereco.setId(null);
		
//		if(repositorioEndereco.findByUsername(Endereco.getUsername()).isPresent()) {
//			
//		}
		
//		String senha = passwordEnconder.encode(Endereco.getSenha());
//		Endereco.setSenha(senha);
//		
		return repositorioEndereco.save(Endereco);
		
	}
	
	 public Endereco atualizar(Endereco Endereco, Long id) {
		 Optional<Endereco> EnderecoAtualizado = repositorioEndereco.findById(id);
		 
		if(EnderecoAtualizado.isEmpty()) {
			throw new ResourceNotFoundException("Endereco não encontrado por id");
		}
		Endereco.setId(id);		
		return repositorioEndereco.save(Endereco);
		
	}


	public void deletar(Long id) {
	    Optional<Endereco> deletarEndereco = repositorioEndereco.findById(id);
		
	    if(deletarEndereco.isEmpty()) {
			throw new ResourceNotFoundException("Endereco não encontrado por id");
		}
	    
		repositorioEndereco.deleteById(id);	 
}
	
//	public LoginResponse logar(String username, String senha) {
//		
//		Authentication autenticacao = authenticationManager.authenticate(
//				new UsernamePasswordAuthenticationToken(username, senha, Collections.emptyList()));
//		
//		SecurityContextHolder.getContext().setAuthentication(autenticacao);
//		
//		String token = headerPrefix + jwtService.gerarToken(autenticacao);
//		
//		var Endereco = repositorioEndereco.findByUsername(username);
//		
//		return new LoginResponse(token, Endereco.get());
//	}
//	

}