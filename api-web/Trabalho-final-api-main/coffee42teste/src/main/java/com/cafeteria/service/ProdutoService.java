package com.cafeteria.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cafeteria.exception.ResourceNotFoundException;
import com.cafeteria.model.Produto;
import com.cafeteria.repository.ProdutoRepository;

@Service
public class ProdutoService {


	@Autowired
	private ProdutoRepository repositorioProduto;


	public List<Produto> obterTodos() {
		return repositorioProduto.findAll();
	}

	public Optional<Produto> obterPorId(Long id) {
		Optional<Produto> produto = repositorioProduto.findById(id);

		if (produto.isEmpty()) {
			throw new ResourceNotFoundException("Produto não encontrado!");
		}

		return produto;
	}

	public List<Produto> obterPorNome(String nome) {
	List<Produto> produto = repositorioProduto.findByNomeContaining(nome);
		if (produto.isEmpty()) {
			throw new ResourceNotFoundException("Produto não encontrado!");
		}

		return produto;
	}
	

	public Produto adicionar(Produto Produto) {
		Produto.setId(null);
		
		return repositorioProduto.save(Produto);

	}

	public Produto atualizar(Produto Produto, Long id) {
		Optional<Produto> ProdutoAtt = repositorioProduto.findById(id);

		if (ProdutoAtt.isEmpty()) {
			throw new ResourceNotFoundException("Produto não encontrado por id");
		}
		//repositorioProduto.deleteById(id);
		Produto.setId(id);
		return repositorioProduto.save(Produto);

	}

	public void deletar(Long id) {
		Optional<Produto> deletarProduto = repositorioProduto.findById(id);

		if (deletarProduto.isEmpty()) {
			throw new ResourceNotFoundException("Produto não encontrado por id");
		}

		repositorioProduto.deleteById(id);
	}

}