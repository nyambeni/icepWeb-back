const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

//get student applications

router.get('/view_applications', function(req, res){

    

    db.query ('SELECT * FROM applicantinfo ', (err, results) =>{
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