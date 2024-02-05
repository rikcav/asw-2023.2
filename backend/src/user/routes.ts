import express from "express";
import { create, getId } from "./controller";

export const userRoutes = (app: express.Application) => {
  app.post("/user", create);
  app.get("/user/:id", getId);
};
