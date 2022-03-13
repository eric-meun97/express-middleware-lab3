const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    // let uname = req.params.uname;
    if (req.username != null) {
        let out = req.username;
        res.send('Welcome' + " " + out);
    } else {
        res.send('please signin first!');
    }
});

module.exports = router;