var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/section', function(req, res, next) {
  // res.send('respond with a resource');

  let sql = `SELECT * FROM section`;
  db.query(sql ,function (err, data){
    if (err) throw err;
    res.json(data)
  })
});
router.get('/section/:id', function(req, res, next) {
  
  const id = parseInt(req.params.id)
  let sql = `SELECT * FROM section  WHERE id_section=${id}`;
  db.query(sql ,function (err, data ,fields){
    if (err) throw err;
    res.json(data)
  })
});

module.exports = router;
