const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Application 

        router.post('/application', (req, res) =>{  
            var post = {
                

                "firstname": req.body.firstname, 
                "lastname": req.body.lastname,
                "email": req.body.email,
                "idno": req.body.idno,
                "gender": req.body.gender, 
                "specialization": req.body.specialization,
                "mobileno": req.body.mobileno,  
                "proglanguages":  req.body.proglanguages

        
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