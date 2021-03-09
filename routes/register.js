const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//register student 

        router.post('/register', function(req, res){  
            var post = {
                "id" : req.body.id,
                "firstName" : req.body.firstName,
                "lastName" : req.body.lastName,
                "email" : req.body.email,
                "address" : req.body.address,
                "contactNumber" : req.body.contactNumber,
                "specialization" : req.body.specialization,
                "gender" : req.body.gender,
                "password" : req.body.password
            };
        
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
        
            var myQuery = "INSERT INTO applicant_info SET ?";
            db.query(myQuery, [post], function(err, results, fields){
                if(err){ 
                    res.send({
                        data : err,
                        code : 400,
                        message : "Account already exists!!!"
                    }); 
                }else{
                    var email = req.body.email
                    db.query('select * from register where email = ?',email, function(err, results, fields){
                    return res.send(results)
                })
            }
            });
        
        })
module.exports = router;