let router = require('express').Router()

router.get('/api/things', (req, res) => {
  res.json([])
})

router.get('/api/things/:id', (req, res) => {
  res.json({})
})

module.exports = router