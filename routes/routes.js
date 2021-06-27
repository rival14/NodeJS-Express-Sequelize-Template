import express from "express";
import { getUsers } from "../controllers/User.js";

const route = express.Router();

route.get('/users', getUsers);
route.get('/users/:id', getUsers);
route.delete('/users/:id', getUsers);

export default route;