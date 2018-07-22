module.exports = [{
    "type": "postgres",
    "host": process.env.DB_HOST || "localhost",
    "port": process.env.DB_PORT || 5432,
    "username": process.env.DB_USERNAME || "test",
    "password": process.env.DB_PASSWORD || "test",
    "database": process.env.DB_DATABASE || "test",
    "synchronize": process.env.NODE_ENV !== 'production',
    "logging": true,
    "entities": ["src/app/models/entities/**/*.ts"],
    "migrations": ["src/database/migrations/**/*.ts"],
    "cli": {
        "entitiesDir": "src/app/models/entities",
        "migrationsDir": "src/app/models/migration"
    }
}];