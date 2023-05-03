import express from "express";
import { createTours } from "../controllers/TourController.js";

const router = express.Router();

//create new tour
router.post("/", createTours);

export default router;
