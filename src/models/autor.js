const mongoose = require("mongoose");
//exporta la funcion createModelAutor
module.exports.createModelAutor = () => {
  const Schema = mongoose.Schema;
  const libroSchema = new Schema({
    nombrelibro: String
  });
  const autorSchema = new Schema({
    nombreautor: String,
    libros: [libroSchema]
  });
  const autorModel = mongoose.model("autores", autorSchema);

  return { autorModel };
};
