<<<<<<< HEAD
import express from "express";
import { createUser } from "../controllers/userController.js";
=======
// server/routes/userRoute.js
import express from "express";
import {createUser} from "../controllers/userController.js";
>>>>>>> origin/main

const router = express.Router();

router.post("/", createUser);

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> origin/main
