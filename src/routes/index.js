import { Router } from "express";
import { getIndex, getRazas, getFavoritos } from "../controllers/pageController.js"; 

const router = Router()

router.get("/", getIndex)

router.get("/razas", getRazas)

router.get("/favoritos", getFavoritos)

export default router