require('dotenv').config();
const express = require('express');

const studentListRouter = require('./routes/studentsRoutes');

const app = express();


app.use(express.json());


app.use('/student', studentListRouter);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(`server listening on PORT ${PORT}`);

});