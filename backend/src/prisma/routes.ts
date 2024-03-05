import express from "express";
import { userRoutes } from "../user/routes";
import { itemRoutes } from "../item/routes";
import { orderRoutes } from "../order/routes";

module.exports = (app: express.Application) => {
  userRoutes(app);
  itemRoutes(app);
  orderRoutes(app);
};
