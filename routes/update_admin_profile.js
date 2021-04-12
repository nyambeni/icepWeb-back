const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Udate profile
router.put('/update_profile', (req, res) => {
    const {first_name} = req.body
    const {last_name} = req.body
    const {email} = req.body
    const {password} = req.body
    const {id} = req.params

   db.query('update register  set first_name = ? , last_name = ?, email= ?, password=? where id = ?', [first_name,last_name,email,password, id], (err, rows) =>{
     if(!err){
       res.send('status has been updated.')
     }else{
       console.log(err)
     }
   })
   console.log(id)
 }) 
module.exports = router ;