const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');
const nodemailer = require("nodemailer");

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

                    async function main() {
                        // Generate test SMTP service account from ethereal.email
                        // Only needed if you don't have a real mail account for testing
                        let testAccount = await nodemailer.createTestAccount();
                      
                        // create reusable transporter object using the default SMTP transport
                        let transporter = nodemailer.createTransport({
                          host: "smtp.ethereal.email",
                          port: 587,
                          secure: false, // true for 465, false for other ports
                          auth: {
                            user: testAccount.email, // generated ethereal user
                            pass: testAccount.password, // generated ethereal password
                          },
                        });
                      
                        // send mail with defined transport object
                        let info = await transporter.sendMail({
                          from: '"Fred Foo 👻" <thembashabangu50@gail.com>', // sender address
                          to: "bar@example.com, baz@example.com", // list of receivers
                          subject: "dear student", // Subject line
                          text: "Successfully! registerd at icep?", // plain text body
                          html: "<b>Successfully! registerd at icep?</b>", // html body
                        });
                      
                        console.log("Message sent: %s", info.messageId);
                        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                      
                        // Preview only available when sending through an Ethereal account
                        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                      }
                      
                      main().catch(console.error);

                      
                })
            }
            });
        
        })
module.exports = router;