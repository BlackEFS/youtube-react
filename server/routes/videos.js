import express from "express";
import { addWiew, random, sub, trend, addVideo,getByTag, search, getVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
 router.post("/",verifyToken, addVideo);
 router.put("/id",verifyToken, addVideo);
 router.delete("/id",verifyToken, addVideo);
 router.get("/find/:id", getVideo);
 router.put("/wiew/:id", addWiew);
 router.get("/trend", trend);
 router.get("/random", random);
 router.get("/sub",verifyToken, sub);
 router.get("/tags", getByTag);
 router.get("/search", search);


export default router;