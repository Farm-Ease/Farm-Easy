package com.app.service;

import com.app.dto.ProductDTO;

public interface ProductService {

	ProductDTO addNewProduct(ProductDTO prod);
	ProductDTO updateProduct(Long productId, ProductDTO prod);
}
