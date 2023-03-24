const express = require("express")
const User = require("../model/model")
const create = async(req,res)=>{
    try{
        const user = await new User(req.body).save()
         res.status(201).json({
        "status":"Success",
        user
    })
    }catch(err){
        res.status(400).json({
            "status":"failed",
            message:err.message
        })
    }
    
}

const update =  async(req,res)=>{

    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
          )
          res.status(201).json({
            "status":"Success",
            user
        })
    }catch(err){
        res.status(400).json({
            "status":"failed",
            message:err.message
        })
    }
}
const deleteUser =  async(req,res)=>{

    try{
        const user = await User.findOneAndDelete({_id:req.param.id})
         res.status(200).json({
        "status":"Success",
        "message":"user Is deleted"

    })
    }catch(err){
        res.status(400).json({
            "status":"failed",
            message:err.message
        })
    }
}

const getUser =  async(req,res)=>{

    try{
        const user = await User.find()
         res.status(200).json({
        "status":"Success",
        user
    })
    }catch(err){
        res.status(400).json({
            "status":"failed",
            message:err.message
        })
    }
}

const getOneUser =  async(req,res)=>{

    try{
        const user = await User.findOne({_id:req.param.id})
         res.status(200).json({
        "status":"Success",
        user
    })
    }catch(err){
        res.status(404).json({
            "status":"failed",
            "message":"There is no event with that id"
        })
    }
}
module.exports = {create,update,deleteUser,getUser,getOneUser}