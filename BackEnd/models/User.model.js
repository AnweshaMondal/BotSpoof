import mongoose  from "mongoose";

const UserSchema = new mongoose.Schema({
   
    sender:{
        type:String,
        required:true,
        enum:["User"]
    },
    text:{
        type:String,
        required:true
    },
    //when the conversation took place
    timeStamp:{
        type:Date,
        // required:true,->not required here, we shall use default
        default: new Date().now
    }

});

//create model fro the schema
const User = new mongoose.model('User',UserSchema);

export default User;