const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

const bodyParser = require('body-parser');

router.use(bodyParser.json());

//register student 

        router.post('/register', function(req, res){ 

//const nodemailer = require('nodemailer');

//register student 

        router.post('/register', (req, res) =>{  

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

            db.query('INSERT INTO applicant_info SET ?', [post], function(err, results) {
                if(err){
                  throw err
                }else{
                 
                  res.send({data: req.body,msg:"successfully registered"});
                  res.end();  
                };
             
              })
            if (!email || !password ){
                return response.send({ msg: 'please insert email and password ' });
             }
             if (password.length < 6) {
               return response.send({ msg: 'Password must be at least 6 characters' });
               }
               if (!first_name || !last_name) {
                return response.send({ msg: 'Please enter all fields' });
                }

                var user = post;
    
               /* bcrypt.hash(user.password, 10, function(err, hash){
                        if(err) console.log(err);
                        user.password = hash;
                    })*/

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
                    db.query('select * from register where email = ?',email, (err, results, fields) =>{
                    return res.send(results)
                })
            }
            });
        
            })
module.exports = router;