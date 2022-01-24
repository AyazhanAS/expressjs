import { Router } from "express";
import { getAll } from "../controllers/server.js";
const router = Router();

router.get("/api/server", getAll)

export default router;