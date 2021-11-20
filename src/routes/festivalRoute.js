import {Router} from "express";
import {jwtProtect} from "../middlewares/jwtAuthMiddleware";
import {
    addFestival,
    deleteFestival, getAllFestival,
    getFestivalFromId, getFestivalFromTitle,
    updateFestival
} from "../controllers/festivalController";

const router = Router();

router.get("/", jwtProtect, getAllFestival);
router.get("/title/:title", jwtProtect, getFestivalFromTitle);
router.get("/:id", jwtProtect, getFestivalFromId);
router.post("/", jwtProtect, addFestival);
router.patch("/:id", jwtProtect, updateFestival);
router.delete("/:id", jwtProtect, deleteFestival);

export default router;
