var express = require('express');
const testingController = require("../unittest/test");
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.send('Welcome to index home page');
});

router.get("/testingadd", testingController.testAdd);

module.exports = router;