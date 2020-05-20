const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");

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

yargs.parse();
