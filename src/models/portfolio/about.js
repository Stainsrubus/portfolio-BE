import mongoose from "../index.js"
const aboutSchema = new mongoose.Schema({
    imgURL:{type:String,required:true},
    description1:{type:String,required:true},
    description2:{type:String,required:true},
    skills:{type:String,required:true}
})
const aboutModel = mongoose.model("abouts", aboutSchema);
export default aboutModel;