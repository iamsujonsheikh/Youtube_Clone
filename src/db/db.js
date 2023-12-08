import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectState = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connect successful${connectState.connection.host}`)
    } catch (error) {
        console.log("mongoDB connection failed!.", error)
        process.exit(1)
    }
}
export default connectDB