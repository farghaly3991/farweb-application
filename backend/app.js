const express= require('express');
const path = require('path');
const mongoose= require('mongoose');
const bodyParser = require("body-parser")
const app= express();
const fs = require("fs-extra")
const publicRouter = require('./routes/public_router');
const server = require('http').createServer(app);
const upload = require('express-fileupload')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
// const db = "mongodb://localhost:27017/platform_1";
// mongoose.connect("mongodb+srv://farghaly:farghaly_93@cluster0-i8la2.mongodb.net/E-shop",{ useNewUrlParser: true,  useUnifiedTopology: true  })
mongoose.connect(process.env.database,{ useNewUrlParser: true,  useUnifiedTopology: true  })
.then(() => {
  console.log('Connected successfully to database.............');
}
).catch(()=>{
  console.log('Connection failed ... !');
});

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////







app.use(upload({useTempFiles: true, preserveExtension: 4}));
express.json({limit: '50mb', extended: true});
express.urlencoded({limit:'50mb', extended: true});

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use('/images', express.static(path.join(__dirname,'images')));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
}); 
app.use(publicRouter);

app.use('/', express.static(path.join(__dirname, 'dist')));


 app.use(async(req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
 });







exports.server = server;
exports.app = app;
// exports.cloudinary = cloudinary;