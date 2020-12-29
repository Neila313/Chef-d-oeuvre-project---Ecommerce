const express = require('express');
const app = express();
const port = 8080;
const con = require('./bdd/db')
const router = require('./routes/admin')
const routers = require('./routes/customer')

app.use(
	express.urlencoded({
		extended: true
	})
);
app.use(express.json());

app.use('/admin',router)
app.use('/customer',routers)


app.listen(port, function(){
    console.log('server connected')
	})
	