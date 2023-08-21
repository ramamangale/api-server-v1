const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));

app.get('/api', (req, res) => {
  const path = `Test`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

module.exports = app;
