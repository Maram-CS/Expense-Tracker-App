import trackModel from "../model/trackerModel.js";
import {config} from "dotenv";
import configDB from "../Config/config_DB.js";

config ();
configDB(process.env.nameDb || "trackerDb");

const addTracker = async (req,res,next) => {
    try {
        const tracker = new trackModel(req.body);
        const newTracker = await tracker.save();
        if(newTracker) {
            res.status(200).json({message : "added succeed",newTracker});
        }else {
            res.status(400).json({message : "filed adding"});
        }
        next();
    }catch(err) {
        console.error (err);
    }
}

const getTrackers = async (req,res,next)=> {
    try {
        const trackers = await trackModel.find({});
        if(trackers) {
            res.status(200).json({trackers,message:"done👌"});
        }else {
            res.status(400).json({message :  "filed operation"});
        }
        next();
    }catch(err) {
        console.error(err);
    }
}

const gatATracker = async (req,res,next)=> {
    try {
        const tracker = await trackModel.findById(req.params.id);
        if(tracker) {
            res.status(200).json({tracker,message:"done👌"});
        }else {
            res.status(400).json({message:"filed operation"});
        }
        next();
    }catch(err) {
        console.error (err);
    }
}

const gatATrackerByTitle = async (req,res,next)=> {
    try {
        const {title} = req.body;
        const tracker = await trackModel.findOne({title});
        if(tracker) {
            res.render("auth/updateForm",{tracker});
        }else {
            res.status(400).json({message:"filed operation"});
        }
        next();
    }catch(err) {
        console.error (err);
    }
}

const updateTracker = async (req,res,next) => {
    try {
        const {title} = req.body;
        const UpdatedTracker = await trackModel.findOneAndUpdate({title},req.body);
        if(UpdatedTracker) {
            res.status(200).json({UpdatedTracker,message:"done👌"})
        }else {
            res.status(400).json({message:"filed operation"});
        }
        next();
    }catch(err){console.error(err)};
}

const deleteTracker = async(req,res,next)=> {
    try {
        const {title} = req.body;
        const deletedTracker = await trackModel.findOneAndDelete({title});
        if(deletedTracker) {
            res.status(200).json({deletedTracker,message:"done👌"});
        }else {
            res.status(400).json({message:"filed operation"});
        }
        next();
    }catch (err) {
        console.error(err);
    }
}

export {addTracker,deleteTracker,updateTracker,getTrackers,gatATracker,gatATrackerByTitle};
