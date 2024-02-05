import express from "express";
import { userRoutes } from "../user/routes";

module.exports = (app: express.Application) => {
  userRoutes(app);
};
