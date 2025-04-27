import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile:{
      type:String, // coludinary url.
      required:true,
    },
    thumbnail:{
      type:String, // coludinary url.
      required:true,
    },
    title:{
      type:String,
      required:true,
      trim:true,
    },
    description:{
      type:String,
      required:true,
      trim:true,
    },
    isPublished:{
      type:Boolean,
      default:true,
    },
    views:{
      type:Number,
      default:0,
    },
    duration:{
      type:Number, /// coludinary url.
      required:true,
    },
     owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
     }
  },{timestamps:true}
);

videoSchema.plugin(mongooseAggregatePaginate);
// mongooseAggregatePaginate is a plugin for mongoose that allows you to paginate the results of an aggregation query.
export const Video = mongoose.model("Video", videoSchema);