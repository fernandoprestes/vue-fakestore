import type { Products } from '~/@types/IProducts';

export default interface ProductService {
  getAllProduts(): Promise<Products[]>;
  getSingleProduct(id: number): Promise<Products>;
  getProductInSpecificCategory(category: string): Promise<Products[]>;

  getAllCategories(): Promise<string[]>;
}
