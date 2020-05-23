const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
	command: "list",
	describe: "list notes",
	handler: () => {
		notes.listNotes();
	},
});

yargs.command({
	command: "read",
	describe: "read notes",
	builder: {
		title: {
			describe: "note title",
			demandOption: true,
			type: "string",
		},
	},
	handler: (argv) => {
		notes.readNotes(argv.title);
	},
});

yargs.command({
	command: "add",
	describe: "Add",
	builder: {
		title: {
			describe: "note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "note body",
			demandOption: true,
			type: "string",
		},
	},
	handler: (argv) => {
		notes.addNote(argv.title, argv.body);
	},
});

yargs.command({
	command: "remove",
	describe: "remove note",
	builder: {
		title: {
			describe: "note title",
			demandOption: true,
			type: "string",
		},
	},
	handler: (argv) => {
		notes.removeNote(argv.title);
	},
});

yargs.parse();
