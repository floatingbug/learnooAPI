require("dotenv").config();
require("module-alias/register");
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const apiRouter = require("@router");
const cors = require("cors");


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
	origin: "*",
}));

app.use("/api", apiRouter);


httpServer.listen(PORT, () => {
	console.log("Server listen on port: ", PORT);
});
