

import 'dotenv/config';


import connectDB from "./db/index.js";
import app from './app.js';
import { PORT } from './constants.js';


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }
  )
  app.on("error", (error) => {
    console.log("Error", error);
    throw error;
  } 
  );
}
).catch((error) => {
  console.error("Error connecting to MongoDB", error);
  process.exit(1); 
}
);

























/*
import express from "express";

const app = express();
(async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`)
    app.on("error", (error) => {
      console.log("Error",error);
      throw error;
    })
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } 
    catch (error) {
    console.log("Error connecting to MongoDB", error);  
    
  }
})()
  */