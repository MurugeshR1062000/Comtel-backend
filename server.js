const express = require('express');
const connectDB = require ('./DB/Connection');
const app = express();
const cors = require('cors');

connectDB();
app.use(cors())
app.use(express.json({ extended: false }));
// app.use('/api/userModel', require('./Api/User'));
app.use('/api/clientModel', require('./Api/User'));
// app.use('/api/invoiceModel', require('./Api/User'));
const port = process.env.port || 4000;



app.listen(port, ()=> console.log('server started'));

