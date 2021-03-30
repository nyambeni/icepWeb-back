const express       = require('express');
const path          = require('path')
const app           = express()
const multer        = require('multer')    
const mysql         = require('mysql')
const bodyParser    = require("body-parser");
const db            = require('../conn/conn'); 
const DIR           = './documents';

 
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null,DIR);
    },
    filename: function (req, file, cb) {
      //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      const filename = file.originalname.toLocaleLowerCase();
      cb(null,filename);
    }
});

let upload = multer({storage: storage,
  fileFilter : function(req, file ,cb){
    if (file.mimetype == "file/docx"  || "file/txt"  || "filepdf"  || "file.http" )
    {
      cb(null, true)
    }else{
      cb(null, false)
      {
        return cb(new Error('only docx , txt , pdf and http formatt allowed !'));
      }
    }
  }
  
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/upload_file',upload.single('myfile') ,function (req, res) {
   
          if (req.file) {

            console.log('file received');
            var sql = `INSERT INTO applications SET supportingDocs = ? `;  
             db.query(sql,[req.file.filename],function(req, res){ 
              message = " your cv Successfully! uploaded";
              console.log('db apdated')
             })

               
        } else{
              
           
          console.log("No file received"); console.log("No file received");
      
          message = "Error! in file uploaded."
       
            }
      });

module.exports = app ;