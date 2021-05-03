import { Resolver, Arg, Query, Mutation, ID } from "type-graphql";
import { Service } from "typedi";
import { ObjectId } from "mongodb";

import { Product } from "../../documents";
import ProductService from "./service";
import { NewProductInput } from "./input";

@Service()
@Resolver((of) => Product)
export default class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query((returns) => Product)
  async getProduct(@Arg("id") id: ObjectId) {
    const product = await this.productService.getById(id);

    return product;
  }

  @Mutation((returns) => Product)
  async createProduct(
    @Arg("createProductData") createProductData: NewProductInput
  ): Promise<Product> {
    const product = await this.productService.addProduct(createProductData);
    return product;
  }
}
