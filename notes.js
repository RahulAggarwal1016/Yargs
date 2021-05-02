const fs = require("fs");

const getNotes = () => {
	console.log(loadNotes());
};

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title == title);

	if (duplicateNotes.length === 0) {
		notes.push({
			title,
			body,
		});

		saveNotes(notes);
	} else {
		console.log("Note title taken!");
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const filteredNotes = notes.filter((note) => note.title != title);
	saveNotes(filteredNotes);
};

const loadNotes = () => {
	try {
		const data = JSON.parse(fs.readFileSync("notes.json").toString());
		return data;
	} catch (err) {
		return [];
	}
};

const saveNotes = (notes) => {
	fs.writeFileSync("notes.json", JSON.stringify(notes));
};

module.exports = {
	getNotes,
	addNote,
	removeNote,
};
