
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

//admin profile

router.get('/admin_profile', function(req, res){

    const email = req.body.email;

    var myQuery = "SELECT * FROM admin_reg WHERE email = ?";
    

    db.query (myQuery, [email], function(err, results){
        if(err){
            
            res.send({
                code : 400,
                message : err
            })
        }else{
            
            
            res.send({results

            })
         }
    })
})
//get all students
router.get('/register', function (req, res) {
    mysqlConn.query('SELECT * FROM register' ,function (error, results, fields) {
        if (error) throw error;
        return res.send({ status:200, data: results, message: 'register list.' });
    });
});
// Retrieve profile by id 
router.get('/register/:id', function (req, res) {
    let id = {id:req.body.id};
     
    mysqlConn.query('SELECT * FROM regisetr WHERE id = ?', [id], (error, result) => {
            if (error) throw error;
     
            res.send(result);
        });
    });

   /* router.get('/application/:id', function (req, res) {
        let id = {id:req.body.id};
         
        mysqlConn.query('SELECT * FROM applicantinfo WHERE id = ?', [id], (error, result) => {
                if (error) throw error;
         
                res.send(result);
            });
        });*/



//  Delete student
router.delete('/delete_profile/:id', function (req, res) {
    let id = {id:req.body.id};
    if (!id) {
        return res.status(400).send({ message: 'Please provide user_id' });
    }
    mysqlConn.query('DELETE FROM register WHERE id =?', [id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ data: results, message: 'student has been deleted successfully.' });
    });










});

module.exports = router;