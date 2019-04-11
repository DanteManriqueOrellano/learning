const { gql } = require("apollo-server");
const typeDefs = gql`
  type Mutation {
    nuevoAutor(nombreautor: String): [Autor]
    nuevoAutorLibro(nombreautor: String, nombrelibro: String): [Autor]
  }
  type Autor {
    nombreautor: String
    libros: [Libro]
  }
  type Query {
    autores: [Autor]
  }
  type Libro {
    nombrelibro: String
  }
`;
module.exports = typeDefs;
