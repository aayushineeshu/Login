var express = require('express');
var router = express.Router();

//since we dont have db to verify the data we will create a dummy array
var users = [
    {
        email: 'aaayyy@gmail.com',
        password: 'password'
    }
]

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send("Welcome to backend server")
});

router.post('/login', function(req, res){
    let result = users.find(user => user.email == req.body.email);
    if(result){
        if(result.password == req.body.password){
            res.status(200).send({
                message : "Successful login!"
            })
        }
        else{
            res.status(200).send({
                message: "Incorrect Password!"
            })
        }
    }
    else{
        res.status(200).send({
            message: "User does not exist!"
        })
    }
})

module.exports = router;
