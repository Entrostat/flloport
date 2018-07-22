module.exports = [{
    "type": "postgres",
    "host": process.env.DB_HOST || "localhost",
    "port": process.env.DB_PORT || 5432,
    "username": process.env.DB_USERNAME || "test",
    "password": process.env.DB_PASSWORD || "test",
    "database": process.env.DB_DATABASE || "test"
}];