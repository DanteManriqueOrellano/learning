module.exports = {
  Query: {
    autores: async (_,__, { dataSources }) => {
      const autores = await dataSources.autorapi.todosAutores();  
      return autores;
    }
  },
  Mutation: {
    nuevoAutor: async (_, { nombreautor }, { dataSources }) => {
      const autor = await dataSources.autorapi.agregarAutor({ nombreautor });
      
      return autor;
    },
    nuevoAutorLibro: async (_,{ nombreautor, nombrelibro},{ dataSources }) => {
      const autor = await dataSources.autorapi.agregarAutorYLibro({
        nombreautor,
        nombrelibro
      });
      return autor;
    }
  }
  
};
