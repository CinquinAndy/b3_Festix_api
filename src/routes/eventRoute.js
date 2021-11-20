import {Router} from "express";
import {jwtProtect} from "../middlewares/jwtAuthMiddleware";
import {
    addEvent,
    deleteEvent, getAllEvent,
    getEventFromId, getEventFromTitle, getLinkArtistEvent, linkArtistEvent,
    updateEvent
} from "../controllers/eventController";

const router = Router();

router.get("/", jwtProtect, getAllEvent);
router.get("/title/:title", jwtProtect, getEventFromTitle);
router.get("/:id", jwtProtect, getEventFromId);
router.post("/", jwtProtect, addEvent);
router.post("/link/", jwtProtect, linkArtistEvent);
router.post("/get-link/", jwtProtect, getLinkArtistEvent);
router.patch("/:id", jwtProtect, updateEvent);
router.delete("/:id", jwtProtect, deleteEvent);

export default router;
