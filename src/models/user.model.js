import mongoose from "mongoose";


let userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        trim:true,
        minLength:[4,"username minimum character length is 4"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[6,"password minimum character length is 6"]
    },
    confirmPassword:{
        type:String,
        required:[true,"confirm password is required"],
        minLength:[6,"confrim password minimum character length is 6"]
    }
},{
    timestamps:true
})

let User=mongoose.model("User",userSchema)

export default User;