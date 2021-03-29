var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', async (req, res, next) => {
  const data = {
    title: 'hello nunjucks',
    layout: 'layout.njk',
    message: 'hello world',
  }
  res.render('index.njk', data)
})

module.exports = router