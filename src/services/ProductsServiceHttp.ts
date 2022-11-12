import type { Products } from '~/@types/IProducts';
import type HttpClient from '~/infra/HttpClient';
import type ProductService from './ProductsService';

export default class ProductsServiceHttp implements ProductService {
  constructor(readonly httpClient: HttpClient) {}

  async getAllProduts(): Promise<Products[]> {
    const response = await this.httpClient.get(`products`);
    return response;
  }

  async getSingleProduct(id: number): Promise<Products> {
    const response = await this.httpClient.get(`products/${id}`);
    return response;
  }

  async getAllCategories(): Promise<string[]> {
    const response = await this.httpClient.get(`products/categories`);
    return response;
  }
}
