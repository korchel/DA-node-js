import { Router } from "express";
import userController from "../controllers/user.controller";

export const router = new Router();

router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getOneUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/for-admin:id", userController.updateUser);
