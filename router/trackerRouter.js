import { Router } from "express";
import {addTracker,deleteTracker,updateTracker,getTrackers,gatATracker,gatATrackerByTitle} from "../controller/trackerController.js";

const trackerRouter = Router();

trackerRouter.get("/getATracker/:id",gatATracker);
trackerRouter.get("/getAll",getTrackers);
trackerRouter.post("/getATrackerByTitle",gatATrackerByTitle);
trackerRouter.post("/add",addTracker);
trackerRouter.post("/update",updateTracker);
trackerRouter.post("/delete",deleteTracker);

export default trackerRouter;