const path = require("path")
const router = require("express").Router();

// Displays the list of notes and note taking page
router.get("/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/notes.html"))
})

// Displays the initial launch page
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;