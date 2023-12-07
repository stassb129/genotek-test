const express = require('express');
const router = express.Router();
const usersData = require('../db/usersData');


router.get('/', function(req, res, next) {
  const page = req.query.page || 1;
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedPersons = usersData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(usersData.length / pageSize);

  res.json({
    data: paginatedPersons,
    totalPages: totalPages
  });
});

module.exports = router;
