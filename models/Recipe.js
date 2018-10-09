const mongoose = require('mongoose')
const schema = mongoose.Schema;


const recipeSchema = new schema({
  name : { type : String, required : true },
  category : { type : String , required : true },
  description : { type : String , required : true },
  instructions : { type : String , required : true },
  createdDate : { type : Date , default : Date.now },
  likes : { type : Number , default : 0 },
  username : { type : String }
})


module.exports = mongoose.model(`Recipe`,recipeSchema);