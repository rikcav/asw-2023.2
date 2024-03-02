import express from "express";
import { getId, getAll } from "./controller";

export const itemRoutes = (app: express.Application) => {
  app.get("/item/:id", getId);
  app.get("/item/", getAll);
};
