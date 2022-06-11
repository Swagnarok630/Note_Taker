const router = require("express").Router();
const path = require("path")
const fs = require("fs")
const uuid = require("uuid")

router.post("/notes", (req,res) => {
    // Using process.cwd to reach the root of the directory so we can access db.json
	const currentSaves = fs.readFileSync(path.join(process.cwd(), "/db/db.json"))

	const newSaves = [...currentSaves, {title: req.body.title, text: req.body.text, id: uuid()}]

	fs.writeFileSync(path.join(process.cwd(), "/db/db.json"), newSaves)
})