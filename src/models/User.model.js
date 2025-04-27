import mongoose from "mongoose";  
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      unique:true,
      trim:true,
      lowercase:true,
      index:true,
      // index:true means it will create an index on the username field for faster search. in searching the data in the database.
    },
    email:{
      type:String,
      required:true,
      unique:true,
      trim:true,
      lowercase:true,
    },
    fullname:{
      type:String,
      required:true,
      trim:true,
    },
    avatar:{
      type:String, // coludinary url. will be stored in the database.
      required:true,
    },
    coverImage:{
      type:String, // coludinary url. will be stored in the database.
    },
    watchHistory:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video",
      }
    ],
    password:{
      type:String,
      required:[true,"password is required"],
    },   
    refreshToken:{
      type:String,
    }, 

  }, {timestamps:true}
);

userSchema.pre("save", async function(next){
  if(!this.isModdified("password")) return next();
  
  this.password= bcrypt.hash(this.password, 10);
  next();
})

userSchema.methods.isPasswordCorrect =async function(password){
  return await bcrypt.compare(password,this.password); // result will be in boolean value.
} 


// doesn't need to be async because it is not use much time to genrate the token.

userSchema.methods.genrateAcessToken= function(){
  return jwt.sign(
    { // playload
      id:this._id,
      username:this.username,
      email:this.email,
      fullname:this.fullname,
    },
    // acess token secret key.
    process.env.ACESS_TOKEN_SECRET,
    {
      ACESS_TOKEN_EXPIRY: process.env.ACESS_TOKEN_EXPIRY,
    },
  );
}

userSchema.methods.genrateRefreshToken= function(){
  return jwt.sign(
    { // playload
      id:this._id,
      
    },
    // acess token secret key.
    process.env.REFRESH_TOKEN_SECRET,
    {
      ACESS_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
    },
  );
}


export const User=mongoose.model("User",userSchema)