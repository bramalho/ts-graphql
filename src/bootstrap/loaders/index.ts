import express from "express";
import { ApolloServer } from "apollo-server-express";

import apolloLoader from "./apollo";
import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async (app: express.Application): Promise<ApolloServer> => {
  await expressLoader(app);
  await mongooseLoader();
  return apolloLoader();
};
