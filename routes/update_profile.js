const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Udate profile by admin
router.put('/update_profile/:id', (req, res) => {
    
    const {status} = req.body
    const {id} =req.params

   db.query('update applicantinfo  set status = ? where id = ?', [status,id], (err, rows) =>{
     if(!err){
       res.send('status has been updated.')
     }else{
       console.log(err)
     }
   })
   console.log(id)
 }) 
module.exports = router ;