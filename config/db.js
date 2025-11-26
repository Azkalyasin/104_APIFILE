const db = require("../models");

async function connectionDb() {
    try {
        await db.sequelize.authenticate();
        console.log("Database Connected successfully.");

        await db.sequelize.sync({ alter: true });
        console.log("Database synchronized");
    }catch (error) {
        console.error("Database connection failed: ", error.massage);
        process.exit(1);
    }
}

module.exports = connectionDb;