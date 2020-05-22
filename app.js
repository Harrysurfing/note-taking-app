const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
	command: "list",
	describe: "add a list",
	handler: () => {
		console.log("list command");
	},
});

yargs.command({
	command: "read",
	describe: "read",
	handler: () => {
		console.log("read command");
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
