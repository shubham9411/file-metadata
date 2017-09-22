var express = require('express')
var path = require('path')
var multer = require('multer')
var upload = multer()
var app = express()
app.listen(process.env.PORT||8100)
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/public/index.html'))
})
app.post('/get-file-size',upload.array('file'),function(req,res){
	var result = {
		'name': req.files[0].originalname,
		'size': req.files[0].size
	}
	res.send(result)
})
