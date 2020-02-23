const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('public'))

/*server.use(function(req, res) {
  res.status(404).render("not-found");
});*/

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/index', function(req, res) {
  return res.render('index')
})

server.get('/about', function(req, res) {
  return res.render('about')
})

server.get('/classes', function(req, res) {
  return res.render('classes', { items: courses })
})

server.get("/courses/:id", function(req, res) {
  const id = req.params.id

  const foundCourse = courses.find(function(course) {
    return course.id == id

  })

  return res.render("courses", { item: foundCourse })
})

server.listen(5000, function() {
  console.log('Server is running')
})
