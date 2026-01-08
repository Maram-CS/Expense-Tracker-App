import { connect } from "mongoose";

const configDB = async (dataBase)=> {
    try {
        await connect(`mongodb://localhost:27017/${dataBase}`);
        console.log(`data base is connecting as ${dataBase}`);
    }catch (err) {
        console.error (err);
    }
}

export default configDB;