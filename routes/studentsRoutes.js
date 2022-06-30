const express = require('express');
const studentList = require('../controllers/studentListController');

const router = express.Router();

// Method --> GET
// @route --> https://[Heroku-base-URL]/student/studentsList
// @ desc --> returns a list of students
router.get('/studentsList', studentList);


module.exports = router;