var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/create', async function(req, res) {
  const userCreated = await userModel.create({
    name: "Akbar",
    age: 35,
    city: "Karachi"
  });
  res.send(userCreated);
});

router.get('/find', async function(req,res){
  const found = await userModel.findOneAndDelete({
    name: 'Akbar'
  })
  res.send(found)
});

module.exports = router;
