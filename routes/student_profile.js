const express = require('express');
const route=express.Router();
const mysqlConn= require('../conn/conn');

route.get('/profile/:id', (req, res) => {


    mysqlConn.query('SELECT * FROM applicant_info WHERE id = ?', [req.params.id], (err, rows) => {
        if(err){
            throw err
          }else{
            console.log(rows);
            return res.send(rows);  
          }
    });
    
  })

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


module.exports=route;