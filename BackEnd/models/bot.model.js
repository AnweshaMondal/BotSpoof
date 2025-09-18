import mongoose  from "mongoose";

const BotSchema = new mongoose.Schema({

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

//create model from the schema
const Bot = new mongoose.model('Bot',BotSchema);

export default Bot;