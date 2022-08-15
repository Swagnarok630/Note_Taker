const router = require("express").Router();
const path = require("path")
const fs = require("fs")
const {v4 : uuidv4} = require("uuid")

// Grabbing all notes in db.json
router.get("/notes", (req, res) => {
	// Using process.cwd to reach the root of the directory so we can access db.json
	const notes = fs.readFileSync(path.join(process.cwd(), "/db/db.json"), "utf8")
	const parsedNotes = JSON.parse(notes)
	res.json(parsedNotes)
})

// Adding a new note to current array of notes in db.json
router.post("/notes", (req,res) => {
	const { title, text } = req.body;

	if (req.body) {
		const newNote = {
			title,
			text,
			id: uuidv4()
		}
		// Using process.cwd to reach the root of the directory so we can access db.json
		const currentNotes = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/db/db.json"), "utf8"));
		currentNotes.push(newNote)
		fs.writeFileSync(path.join(process.cwd(), "/db/db.json"), JSON.stringify(currentNotes))
		res.json(newNote)
	}	
})

// Removing a note based on id from current array of notes in db.json
router.delete("/notes/:id", (req, res) => {
	// Using process.cwd to reach the root of the directory so we can access db.json
	const currentNotes = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/db/db.json"), "utf8"));
	for (let i = 0; i < req.params.id.length; i++)
		if (currentNotes[i].id === req.params.id) {
			currentNotes.splice(i, 1);
			fs.writeFileSync(path.join(process.cwd(), "/db/db.json"), JSON.stringify(currentNotes))
		}
		return res.json(currentNotes)
})

module.exports = router;