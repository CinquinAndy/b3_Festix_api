import {Router} from "express";
import {jwtProtect} from "../middlewares/jwtAuthMiddleware";
import {
    addArtist,
    deleteArtist, getAllArtist,
    getArtistFromIdArtist,
    getArtistFromIdUser, getArtistFromName,
    updateArtist
} from "../controllers/artistController";

const router = Router();

router.get("/", jwtProtect, getAllArtist);
router.get("/name/:artistName", jwtProtect, getArtistFromName);
router.get("/id-artist/:id", jwtProtect, getArtistFromIdArtist);
router.get("/id-user/:id_user", jwtProtect, getArtistFromIdUser);
router.post("/", jwtProtect, addArtist);
router.patch("/", jwtProtect, updateArtist);
router.delete("/", jwtProtect, deleteArtist);

export default router;
