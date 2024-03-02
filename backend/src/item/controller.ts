import express from "express";
import * as itemService from "./service";

export const getId = async (req: express.Request, res: express.Response) => {
  try {
    const item = await itemService.getItemById(Number(req.params.id));
    res.status(200).send(item);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

export const getAll = async (req: express.Request, res: express.Response) => {
  try {
    const items = await itemService.getAllItems();
    res.status(200).send(items);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};
