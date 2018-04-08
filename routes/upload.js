const route =require('express').Router()
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')

route.get('/',(req,res)=>{
    res.render('upload.hbs')
})
route.post('/', upload.single('photo'), (req, res) =>
   {
      fs.readFile(req.file.path, (err, data) =>
            {
                fs.writeFile('uploads/'+req.file.originalname, data, (err) => {
                fs.unlink(req.file.path, () => {})
            })
            })
      res.send(`File is <a href="uploads/${req.file.originalname}">here</a>`)
})


exports=module.exports=route