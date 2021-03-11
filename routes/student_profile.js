const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

//get student profile

router.get('/student_profile', function(req, res){

    const email = req.body.email;

    var myQuery = "SELECT * FROM register WHERE email = ?";
    

    db.query (myQuery, [email], (err, results) =>{
        if(err){
            
            res.send({
                code : 400,
                message : err
            })
        }else{
            
            
           return  res.send({results})
         }
    })
});

module.exports = router ;