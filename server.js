const express = require("express")
const htmlRoutes = require("./routes/htmlRoutes")
const app = express();

// Setting up a port for the app to use, either an available one in the environment or 3001
const PORT = precess.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));


app.use("/", htmlRoutes);

// Listening for port
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));