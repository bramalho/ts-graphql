import { Field, InputType } from "type-graphql";
import { MaxLength, MinLength, IsInt, Min, Max } from "class-validator";

@InputType()
export class NewProductInput {
  @Field()
  @MaxLength(300)
  @MinLength(1)
  name: string;

  @Field()
  @IsInt()
  @Min(1)
  @Max(100000)
  price: number;
}
