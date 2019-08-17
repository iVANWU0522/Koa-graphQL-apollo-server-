export default {
    dbPath: 'mongodb://localhost/graphql?authenticationDatabase=graphql',
    options: {
      user:"graphql_user", 
      pass:"admin",
      keepAlive: true, 
      keepAliveInitialDelay: 300000,
      useNewUrlParser: true
    }
  }