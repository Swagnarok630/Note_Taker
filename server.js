// Variables for modules and routes
const express = require("express")
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const app = express();

// Setting up a port for the app to use, either an available one in the environment or 3001
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes (html for viewing pages and api for handling data retrieval and posting)
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// Listening for port
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

