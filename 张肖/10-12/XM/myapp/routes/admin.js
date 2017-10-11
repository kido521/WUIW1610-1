var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
    res.render('admin/index');
});
router.get('/info', function(req, res) {
    res.render('admin/info');
});
router.get('/pass',function (req,res) {
  res.render('admin/pass')

})
router.get('/user',function (req,res) {
    res.render('admin/user')

})
router.get('/adv',function (req,res) {
    res.render('admin/adv')

})
router.get('/addadv',function (req,res) {
    res.render('admin/addadv')

})
router.get('/cate',function (req,res) {
    res.render('admin/cate')

})
router.get('/addcate',function (req,res) {
    res.render('admin/addcate')

})
router.get('/article',function (req,res) {
    res.render('admin/article')

})
router.get('/addarticle',function (req,res) {
    res.render('admin/addarticle')

})
router.get('/message',function (req,res) {
    res.render('admin/message')

})
router.get('/link',function (req,res) {
    res.render('admin/link')

})
router.get('/addlink',function (req,res) {
    res.render('admin/addlink')

})
router.get('/editlink',function (req,res) {
    res.render('admin/editlink')

})
module.exports = router;
