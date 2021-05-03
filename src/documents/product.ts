import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Product {
  @Field()
  readonly _id!: ObjectId;

  @prop()
  @Field()
  name!: string;

  @prop()
  @Field()
  price!: number;

  @prop({ default: Date.now() })
  @Field(() => Date)
  createdAt!: Date;

  @prop({ default: Date.now() })
  @Field(() => Date)
  updatedAt!: Date;

  @prop({ default: true })
  @Field()
  active!: boolean;
}
