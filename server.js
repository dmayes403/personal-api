const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mainCtrls = require('./controllers/mainCtrl')
const middleware = require('./controllers/middleWare')
const port = 8000;

const app = express()

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.use(bodyParser.json());
app.use(middleware.addHeaders)

app.get('/name', mainCtrls.readName)
app.get('/location', mainCtrls.readLocation)
app.get('/occupations', mainCtrls.readListOccupations)
app.get('/occupations/latest', mainCtrls.readLatestOccupation)
app.get('/hobbies', mainCtrls.readListHobbies)
app.get('/hobbies/:type', mainCtrls.readHobbyType)
app.get('/family/:gender', mainCtrls.readFamilyGender)
app.get('/restaurants', mainCtrls.readListRestaurants)
app.get('/restaurants/:name', mainCtrls.readRestaurantName)
