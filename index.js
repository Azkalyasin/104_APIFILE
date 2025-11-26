const express = require('express');
const db = require('./config/db');
const apiRouter = require('./routes/api');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", apiRouter)

async function startServer(){
    await db();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
    );
}

startServer();