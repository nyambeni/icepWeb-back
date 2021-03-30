const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Udate profile
 router.put('/update_applicant', (req, res) => {
     
    var post = {
        "firstName" : req.body.firstName,
        "lastName" : req.body.lastName,
        "email" : req.body.email,
        "applicationId" : req.body.applicationId,
        "password" : req.body.password
    };

   db.query('update applicant set ?', [post], (err, rows) =>{
     if(!err){
       res.send('status has been updated.')
     }else{
       console.log(err)
     }
   })
   console.log(req.body)
 })  
module.exports = router ; 