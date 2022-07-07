const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User')

router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 6 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user));

})
module.exports = router;
   // console.log(req.body)
    // const user = User(req.body)
    // user.save()
    // res.send(req.body)