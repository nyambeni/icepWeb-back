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

module.exports=route;