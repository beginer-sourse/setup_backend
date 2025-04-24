import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// mongoose give return object.

const connectDB = async () => {
  try {
    const connectioInstance=await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
    console.log("MongoDB connected successfully");
    console.log(`MongoDB connected  DB Host ${connectioInstance.connection.host}`);
    
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); 
  }
}

export default connectDB; 