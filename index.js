const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5001;

const DB_URL = "mongodb+srv://connorkenway157:VZJCEHsKohkrdCBw@cluster0.cdywpct.mongodb.net/Librozone_users?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DB_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});