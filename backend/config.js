module.exports = {
  dev: {
    connectionString: "postgresql://postgres:docker@127.0.0.1:5432/donuts_db",
    port: '9005'
  },
  production: {
    connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
    port: process.env.PORT
  }
}