import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  apiUrl: string = "http://localhost:3000/"

  getAllProducts() {
    return this.httpClient.get<ProductModel[]>(this.apiUrl + 'Products');
  }

  getProductById(id: string) {
    return this.httpClient.get<ProductModel>(this.apiUrl + 'Products' + '/' + id);
  }

  addProduct(product: ProductModel) {
    return this.httpClient.post(this.apiUrl + 'Products', product);
  }

  deleteProduct(id: string) {
    return this .httpClient.delete(this.apiUrl + 'Products' + '/' + id);
  }

  updateProduct(product: ProductModel) {
    return this.httpClient.put(this.apiUrl + 'Products' + '/' + product._id, product);
  }
}
