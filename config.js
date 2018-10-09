const mongoose = require('mongoose');
const keys = require('./keys');

const mlabConfig = () =>  {
  mongoose.connect(keys.mlab.api).then(connected => {
    console.log('db connected');
  }).catch(err => {
    console.log(`gotchaa have an error ${err}`)
  })
}


module.exports  = {
  mlabConfig
}


