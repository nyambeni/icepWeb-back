const jwt = require('jsonwebtoken')
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

router.get('/login', (req, res) => {

  const [{email, password, id}] = req.body 
  
      db.query('SELECT * FROM applicant_info WHERE email = ? AND password = ?', [email , password], (err, results) => {
        console.log(results) 
        if (err) throw err 
        if (results.length>0) {
          jwt.sign({id}, 'secret', { expiresIn: '60s' }, (err, token) => { 
            if (err) throw err
            res.json({  
              token, results         
            });
            });
            redirect()
  
        } else {
          console.log('Email or password is incorrect'); 
          return res.send('Email or password is incorrect');
        }	
      })
    
  });


module.exports = router ;