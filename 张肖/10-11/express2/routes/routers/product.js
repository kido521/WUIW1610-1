var express=require("express");
var router=express.Router();

router.route("/").get(function(req,res){
    res.send("get product")
}).post(function (req,res) {
    res.send("post product")

})

module.exports = router