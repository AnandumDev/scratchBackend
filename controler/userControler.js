const express = require("express")
const userModel = require("../model/usermodel")
const argon2 = require("argon2")
const { log } = require("console")


//post

const usercreate = async (req,res)=>{
    const {name,email , password} = req.body
    const hashpassword = await argon2.hash(password)

    try {
        const create = await userModel.create({name, email, password:hashpassword})
        res.json(create)
       
        
    } catch (error) {
        console.log("errorr",error);
        
        
    }
}


//get

const getdata = async (req,res)=>{
    try {
        const dataget = await userModel.find()
        res.json(dataget)
    } catch (error) {
        console.log("getdata errorr",error);
        
        
    }
}


//getbyid

const getbyid = async (req,res) =>{
    const id =req.params.id
    try {
        const getid = await userModel.findById(id)
        res.json(getid)
    } catch (error) {
        console.log("getid error",error);
        
    }
}

//put update

const updatedata = async (req,res)=>{
    try { 
        const {name,email,password} = req.body
        const update = req.params.id
        const updateid = await userModel.findByIdAndUpdate(update,({name,email,password}))
        res.json(updateid)
        
    } catch (error) {
        console.log("errorr",error);
        
    }
}

//delete

const deletedata = async (req,res) =>{
    const dlt = req.params.id
    try {
        const deleteid = await userModel.findByIdAndDelete(dlt)
        res.json(deleteid)
    } catch (error) {
        console.log("erroee",error);
        
    }
}




module.exports = {usercreate,getdata,getbyid,updatedata,deletedata}