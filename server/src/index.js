require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");
const app = express();

// Middlewares
app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
db.connectToMongoDB();

// Routes
app.use("/mutation", require("./routes/mutation.route"));
app.use("/stats", require("./routes/stats.route"));
app.get("/", (req, res) => {
  res.send("Hello World from my DNA Analyzer API!");
});

app.listen(app.get("port"), () => {
  console.log("Server on port 3000");
});
