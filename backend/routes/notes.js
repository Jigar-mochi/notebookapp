const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj= { 
        B:'C'
    }
    res.json(obj)
})
module.exports = router;