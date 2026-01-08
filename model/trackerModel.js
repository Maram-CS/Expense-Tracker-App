import { Schema,model } from "mongoose";

const tracker_model = new Schema ({
    title :{
        type : String,
        require : true
    },
    amount : {
        type : Number,
        require : true
    },
    category : {
        type : String,
        enum : ["Food","Transport","Internet","Other"],
        require : true
    },
    date : {
        type : Date,
        default : Date.now
    } 
},{timestamps : true});


const trackModel = model("trackModel",tracker_model);

export default trackModel;