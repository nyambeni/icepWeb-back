const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Application 

        router.post('/application', (req, res) =>{  
            var post = {
                

                "firstname": req.body.firstname, 
                "lastname": req.body.lastname,
                "studentno": req.body.studentno,
                "specialization": req.body.specialization,
                "mobileno": req.body.mobileno,  
                "email": req.body.email,
                "document":  req.body.document,
                "status": req.body.status 
        
            };
   
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
        
            
            db.query('INSERT INTO applicantinfo SET ?', [post], function(err, results, fields){
                if(err){
                    
                    res.send({
                        data : err,
                        code : 400,
                        message : "Already applied..."
                    }); 
                }else{
                    var email = req.body.email
                    db.query('select * from applicantinfo where email = ?',email, (err, results, fields) =>{
                        
                 
                    return res.send(results)
                })
            }
            });
        
        })
module.exports = router;