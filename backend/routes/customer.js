const con = require('../bdd/db');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
var cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config');

router.use(cors());

con.connect(function(err){

    if(err) throw err;

    router.post('/sign-up', function(req,res){

        bcrypt.hash(req.body.password, saltRounds, function(err,hash){

            try {
                let dataCustomer = `INSERT INTO customer (lastname, firstname, email, password) VALUES
                ('${req.body.lastname}', '${req.body.firstname}', '${req.body.email}', '${hash}')`;
    
                con.query(dataCustomer, (err,result) => {
                    if(err) throw err;
                    console.log(result)
                    res.status(200).send('New User added');
                
                })
                
            } catch (error) {
                res.send(error)
            }
        })
    });

    



    })



module.exports = router;