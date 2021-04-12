const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//register student 

        router.post('/register', function(req, res){  
            var post = {
                "id" : req.body.id,
                "first_name" : req.body.first_name,
                "last_name" : req.body.last_name,
                "email" : req.body.email,
                "password" : req.body.password
            };
        
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
        
            var myQuery = "INSERT INTO register SET ?";
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
                        
                 
                     res.send(results)
                    return res.send({data:" Successfully! registerd at icep"});
                })
            }
            });
        
        })
module.exports = router;