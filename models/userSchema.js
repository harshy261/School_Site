// const mongoose = require('mongoose');
import mongoose from 'mongoose';

// const validator = require('validator');
import validator from 'validator'

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Id")
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        min: 10
    },
    message:{
        type: String,
        required: true,
        }
})





//WE NEED A COLLECTION


const User = mongoose.model("User", userSchema);

export default User



