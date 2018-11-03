import { app } from './consts'
import { questions } from './stubs/questions'

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (req, res) => {
  res.status(400).send('There is nothing here')
})

app.post('/spot', (req, res) => {

  res.send('Should return a list of all spots in the database')
})

app.get('/spots', (req, res) => {
  res.send('Should return all spots')
})

/**
 * This endpoint can be enhanced by adding a query parameter giving a different set of questions back
 */
app.get('/questions', (req, res) => {
  res.json(questions)
})

/**
 * Primarily called from the admin page to change questions in the app.
 */
app.post('/questions', (req, res) => {
  res.send('Should return feedback if the questions were updated or not')
})

/**
 * Primarily called from the admin page to change questions in the app.
 */
app.get('/users', (req, res) => {
  res.send('Should return a list of all users in the db')
})

/**
 * Add new, change or remove user to the database
 */
app.post('/user', (req, res) => {
  res.send('Should return result of given operation')
})