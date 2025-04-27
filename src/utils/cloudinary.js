import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadVideoCloudinary=async (filepath)=>{
  try {
    if(!filepath) {return null;}

    const reponse =await cloudinary.uploader.upload(filepath,{
      resource_type:auto
    })
    console.log("Cloudinary response",reponse.url);
    return reponse;

  } catch (error) {
      fs.unlinkSync(filepath);
      // remove the file from the local storage. as it is not needed anymore. or it is not uploaded to the cloudinary.
      console.log("Error in uploading video to cloudinary",error);
  }
}

export default uploadVideoCloudinary;