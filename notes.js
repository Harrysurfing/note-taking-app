const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
	return "Your notes....";
};

const addNote = (title, body) => {
	const notes = loadNotes();

	const duplicatedNote = notes.find((note) => note.title === title);

	if (duplicatedNote) {
		console.log(chalk.red("Note exists already!"));
	} else {
		notes.push({
			title: title,
			body: body,
		});
	}

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
	if (notes.length === newNotes.length) {
		console.log(chalk.bgRed("No note found!"));
	} else {
		console.log(chalk.bgGreen(`Note for ${title} removed!`));
	}
	saveNotes(newNotes);
};

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.red("Your notes:"));
	notes.map((e, idx) => {
		console.log(
			chalk.green.bgYellow(`No.${idx} Title: ${e.title} Body: ${e.body}`)
		);
	});
};
const readNote = (title) => {
	const notes = loadNotes();
	const note = notes.find((el) => {
		return el.title === title;
	});
	if (note) {
		console.log(chalk.inverse(`Note for ${title}:`));
		console.log(note.body);
	} else {
		console.log("Note not found!");
	}
};

module.exports = {
	removeNote: removeNote,
	addNote: addNote,
	getNotes: getNotes,
	listNotes: listNotes,
	readNotes: readNote,
};
