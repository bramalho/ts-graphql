import { getModelForClass } from "@typegoose/typegoose";
import { Service } from "typedi";
import { ObjectId } from "mongodb";

import { Product } from "../../documents";
import { NewProductInput } from "./input";

export const ProductMongooseModel = getModelForClass(Product);

@Service()
export default class ProductRepository {
  async getById(_id: ObjectId): Promise<Product | null> {
    return ProductMongooseModel.findById(_id).lean().exec();
  }

  async create(data: NewProductInput): Promise<Product> {
    const product = new ProductMongooseModel(data);

    return product.save();
  }
}
