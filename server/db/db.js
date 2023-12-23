const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const main = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/millet-delight-db');
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.log('Error connecting to database');
    }
}

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

const User = mongoose.model('user', userSchema);
const Product = mongoose.model('product', productSchema);

module.exports = {
    User,
    Product
}