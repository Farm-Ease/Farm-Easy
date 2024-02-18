package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ProductDao;
import com.app.dto.ProductDTO;
import com.app.entities.Product;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ProductDTO addNewProduct(ProductDTO prod) {
		Product productEntity = mapper.map(prod, Product.class);
		Product persistentProd = productDao.save(productEntity);
		return mapper.map(persistentProd, ProductDTO.class);
	}

	@Override
	public ProductDTO updateProduct(Long productId, ProductDTO prod) {
		Product product = productDao.findById(productId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid Product Id!"));
		product.setProductName(prod.getProductName());
		product.setQuantity(prod.getQuantity());
		product.setRate(prod.getRate());
		return mapper.map(product, ProductDTO.class);
	}

}
