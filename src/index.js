const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
//requisitos para graphql
const typeDefs = require("./grapqhql/schema");
const resolvers = require("./grapqhql/resolvers");
//requisitos para resolvers
/**
 * clases API
 * modelos mongoose
 *
 */
const AutorAPI = require("./datasources/autorAPI");
//importa la funcion createModelAutor
const { createModelAutor } = require("./models/autor");
/**
 * configuracion de la conexion mediante mongooose
 */
mongoose
  .connect(
    "mongodb://memoria:a123456789@ds149875.mlab.com:49875/heroku_5jb5hffp",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to db"))
  .catch(err => console.log(err));
//asigna la funcion que representa el modelo a autor
const autor = createModelAutor();
/**
 * inyectando los apis a DataSources
 * Incluir entre paréntesis el cuerpo para retornar un objeto literal:
(params) => ({foo: bar})
 */
const dataSources = () => ({
  autorapi: new AutorAPI({ autor })
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  playground: {
    //endpoint: `https://operacionesanidadas.herokuapp.com` habilitar produccion
    endpoint: `http://localhost:4000`
  }
});
if (process.env.NODE_ENV !== "test")
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
