import { Service } from "typedi";
import { ObjectId } from "mongodb";

import ProductRepository from "./repository";
import { Product } from "../../documents";
import { NewProductInput } from "./input";

@Service()
export default class ProductService {
  constructor(private readonly prodcutRepository: ProductRepository) {}

  public async getById(_id: ObjectId): Promise<Product | null> {
    return this.prodcutRepository.getById(_id);
  }

  public async addProduct(data: NewProductInput): Promise<Product> {
    const newProduct = await this.prodcutRepository.create(data);

    return newProduct;
  }
}
