var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});


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
  let sql = `SELECT * FROM section  WHERE id=${id}`;//df id_section
  db.query(sql ,function (err, data ,fields){
    if (err) throw err;
    res.json(data)
  })
});
router.get('/section/:id/student', function(req, res, next) {
  
  const id = parseInt(req.params.id)
// let sql = `SELECT student.* FROM  student WHERE student.Id_section=${id} `;//id_section
 let sql = `SELECT * FROM student WHERE Id_section=${id} `;
  db.query(sql ,function (err, data ){
    if (err) throw err;
    res.json(data)
  })
});

router.get('/teacher', function(req, res, next) {
  
  // const id = parseInt(req.params.id)
  let sql = `SELECT * FROM teacher `;
  db.query(sql ,function (err, data ,fields){
    if (err) throw err;
    res.json(data)
  })
});

router.get('/teacher/:id', function(req, res, next) {
  
  const id = parseInt(req.params.id)
  let sql = `SELECT * FROM teacher  WHERE id_teacher=${id}`;
  db.query(sql ,function (err, data ,fields){
    if (err) throw err;
    res.json(data)
  })
});

router.get('/teacher/:id/subjects', function(req, res, next) {
  
  const id = parseInt(req.params.id)
  let sql = `SELECT subject.* FROM teacher_subject, subject WHERE teacher_subject.Id_teacher=${id} AND teacher_subject.Id_subject=subject.Id_subject `;
  
  db.query(sql ,function (err, data ,fields){
    if (err) throw err;
    res.json(data)
  })
});

router.post('/create', (req,resp) => {
  // const action = req.params.action;
  // const id = parseInt(req.params.id);
  // const id = req.params.id;
  // if(action === 'create'){
    let body = req.body;
    // body = JSON.parse(body);
    // Object.keys(body).map((key)=>{
    //   body[key] = db.escape(body[key])
    // })
    // body.password
    // argon2.hash(body.password,{
      // type: argon2.argon2id,
      // memoryCost: 1024,
      // parallelism: 2,
      // timeCost : 2
    // }).then(hash=>{
      // body.password = hash.replace('$argon2id$v=19$m=1024,t=2,p=2$','');
      let sql = `INSERT INTO teacher SET ?`;
      db.query(sql,body,(err,result)=>{
        if(err) throw err;
        resp.json(result.insertId)
      })
    });
  
router.post('/create/student', (req,resp) => {

    let body = req.body;
      let sql = `INSERT INTO student SET ?`;
      db.query(sql,body,(err,result)=>{
        if(err) throw err;
        resp.json(result.insertId)
      })
    });
  

module.exports = router;
