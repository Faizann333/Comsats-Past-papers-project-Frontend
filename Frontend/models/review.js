import  mongoose from "mongoose";

const reviewSchema= new mongoose.Schema({
    instructorName:{
        type:String,
        required:true
    },
    courseName:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    }

},{timestamps:true});
export default mongoose.models.Review || mongoose.model("Review", reviewSchema);