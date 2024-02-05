import express from "express";
import * as userService from "./service";

export const create = async (req: express.Request, res: express.Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

export const getId = async (req: express.Request, res: express.Response) => {
  try {
    const user = await userService.getUserById(Number(req.params.id));
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};
