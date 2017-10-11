var express = require('express');
var router = express.Router();
router.route("/").get(function (req,res) {
    res.send("get news")

}).post(function (res,req) {
    res.send("post news ")

})

module.exports = router