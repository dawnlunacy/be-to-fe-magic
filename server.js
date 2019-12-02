const express = require('express');
const cors = require('cors');
const app = express();

// app.use(cors())

var whitelist = ['http://localhost:3001/v1/backend', 'http://localhost:3000' ]

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin !== -1)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.set('port', process.env.PORT || 3001);
app.locals.backend = [{name:'Lacy'}, {name:'Eduardo'}]

app.get('/', (request, response) => {
  response.send('SEE MY BACK END :D')
})

app.get('/v1/backend', cors(corsOptions), (request, response, next) => {
  response.status(200).json(app.locals.backend)
})
app.listen(app.get('port'), () => {
  console.log(`Trying out BE over on http://localhost:${app.get('port')}`);
})



console.log(process)