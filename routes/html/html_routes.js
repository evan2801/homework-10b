//import express router()
const router = require('express').Router();


// import fuctioinality to get all burgers
const { getBurger } = require('../../controllers/burgers_controller.js');
//set up root '/' get route to server homepage with burgerdata
router.get('/', (req, res) => {
    //get all burger data
    getBurger().then(burgerdata => {
        res.render('home', {burgers: burgerdata});
    })
    .catch(err => {
        res.status(500).end();
    });
});

module.exports = router;