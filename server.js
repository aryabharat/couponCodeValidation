require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const couponCode = require('./routes/couponCode')
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cors());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to DB')
        app.listen(PORT, () => console.log(`server running at ${PORT}`))
    })
    .catch(err => console.log(err))


app.use('/couponCode', couponCode);
