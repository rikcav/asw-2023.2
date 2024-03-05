import express from "express";
import { create, getId, getAll } from "./controller";

export const orderRoutes = (app: express.Application) => {
  app.post("/order/", create);
  app.get("/order/:id", getId);
  app.get("/order/", getAll);
};