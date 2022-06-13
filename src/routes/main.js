const { request, response, Router } = require('express')
const express = require('express')
const { route } = require('express/lib/application')
const async = require('hbs/lib/async')
const contact = require("../models/contactUs")


const Detail = require("../models/Detail")
const slider = require('../models/slider')



const routes = express.Router()

routes.get("/", async (req, res) => {

    const details = await Detail.findOne({"_id":"62a6c67c82531260713128b3"})
    const slides = await slider.find()
    // console.log(slides)
    //console.log(details)

    res.render("index", {
       
        Detail:details,
        slides:slides
    })
    //app.set('views', path.join(__dirname, ''));
 })


routes.get("/Specialities", async (req, res) => {
    const details = await Detail.findOne({"_id":"62a4a879b069f85ccd96c3ca"})
    res.render("Specialities",{
        Detail:details
    })
});


// routes.post("/Login", async (req,res) => {

//     res.render("Login",{
//         Detail:details
//     })
     
//})



routes.post("/process-contact-form",async (req, res) =>{
      console.log("this for is submitted")
      console.log(req.body)
      //let save data on DB
       try{    
        const data = await contact.create(req.body)
        console.log(data)
        return res.redirect("/")


       }catch(error){
            console.log(error)
            res.redirect("/")
       }

})






module.exports = routes