import express from "express";
import * as orderService from "./service";

export const create = async (req: express.Request, res: express.Response) => {
  try {
        const order = await orderService.createOrder(req.body);
        res.status(200).send(order);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};

export const getId = async (req: express.Request, res: express.Response) => {
  try {
        const order = await orderService.getOrderById(Number(req.params.id));
        res.status(200).send(order);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};