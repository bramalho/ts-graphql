# TS GraphQL

```bash
cp .env.example .env

# fill `.env` with your `MONGODB_URI`

npm install

npm run start:dev
```


## Mutations

```gql
mutation CreateProduct($input: NewProductInput!) {
  product: createProduct(createProductData: $input) {
    _id
    name
    price
    createdAt
    updatedAt
    active
  }
}
```

```json
{
 "input": {
   "name": "New Product",
   "price": 100
 }
}
```

## Queries

```gql
query{
  getProduct(id: "<OBJECT_ID>") {
    _id
    name
    price
    createdAt
    updatedAt
    active
  }
}
```
