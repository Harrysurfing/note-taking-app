const fs = require("fs");

const getNotes = () => {
	return "Your notes....";
};

const addNote = (title, body) => {
	const notes = loadNotes();

	notes.push({
		title: title,
		body: body,
	});

	saveNotes(notes);
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		const dataString = fs.readFileSync("notes.json").toString();
		const data = JSON.parse(dataString);
		return data;
	} catch (e) {
		return [];
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const newNotes = notes.filter((note) => note.title !== title);
	saveNotes(newNotes);
};

module.exports = {
	removeNote: removeNote,
	addNote: addNote,
	getNotes: getNotes,
};
