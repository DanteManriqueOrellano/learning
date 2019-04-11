const { DataSource } = require("apollo-datasource");
class AutorAPI extends DataSource {
  constructor({ autor }) {
    super();
    this.autor = autor;
  }
  initialize(config) {
    this.context = config.context;
  }
  async todosAutores() {
    const autores = await this.autor.autorModel.find({});
    console.log(autores.libros);
    return autores;
  }
  esNuevo({ _id }) {
    const autor = this.autor.autorModel.findOne({});
    return true;
  }
  async agregarAutor({ nombreautor }) {
    const autor = await new this.autor.autorModel({
      nombreautor: nombreautor
    });
    autor.save((err, autor) => {
      if (err) return console.error(err);
      return autor;
    });
  }
  async agregarAutorYLibro({ nombreautor, nombrelibro }) {
    const autorlibro = await new this.autor.autorModel({
      nombreautor: nombreautor,
      libros: [{ nombrelibro: nombrelibro }]
    });
    autorlibro.save((err, autorlibro) => {
      if (err) return console.error(err);
      return autorlibro;
    });
    //revisar https://medium.freecodecamp.org/graphql-zero-to-production-a7c4f786a57b
    console.log(autorlibro);
  }
}
module.exports = AutorAPI;
