const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

//get student profile

router.get('/view_profiles', function(req, res){

    

    db.query ('SELECT * FROM register ', (err, results) =>{
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