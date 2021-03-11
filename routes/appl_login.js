
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

router.get('/applicant_login',function(req,res){

        var email= req.body.email;
        var password = req.body.password;
        
        db.query('SELECT * FROM register WHERE email = ?',[email], function (error, results, fields) {
        if (error) {

          res.send({
            code:400,
            message:"error ocurred unable to login"
          })
        }else{
         
          if(results.length >0){
            if(results[0].password == password){
                
                //var username = req.body.username
                db.query('select * from register where email = ?',email, function(err, results, fields){  
                    return res.send(results)
                    return res.send('welcome to icep login ' )
                })
            }
            else{
              res.send({
                "code":204,
                "success":"Email and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"Email does not exist"
                });
          }
        }
    });

})


module.exports = router ;