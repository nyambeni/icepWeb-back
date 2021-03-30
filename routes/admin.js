
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

//login
router.get('/login',function(req,res){

    
        var email= req.body.email;
        var password = req.body.password;
        db.query('SELECT * FROM admin WHERE email = ?',[email], function (error, results, fields) {
        if (error) {

          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        }else{
         
          if(results.length >0){
            if(results[0].password == password){
                
                var email = req.body.email
                db.query('select * from admin where email = ?',email, function(err, results, fields){  
                    return res.send(results)
                })
            }
            else{
              res.send({
                "code":204,
                "success":"Username and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"Username does not exist"
                });
          }
        }
    });

})
//view profiles list
router.get('/profiles', function (req, res) {
  db.query('SELECT * FROM applicant' ,function (error, results, fields) {
      if (error) throw error;
      return res.send({ status:200, data: results, message: 'applicants list.' });
  });
});

//delete profile
router.delete('/:applicationId', (req, res) => {

    db.query('DELETE FROM applicant WHERE applicationId = ?', [req.params.applicationId], (err, rows) =>{
      if(!err){
        res.send('Applicant has been deleted.')
      }else{
        console.log(err)
      }
    })
  })

  // update application status
  router.put('/update', (req, res) => {
    
       const {status, applicationId} = req.body
  
      db.query('update applicant set status = ? where applicationId = ?', [status, applicationId], (err, rows) =>{
        if(!err){
          res.send('status has been updated.')
        }else{
          console.log(err)
        }
      })
      console.log(req.body)
    })  

module.exports = router ;