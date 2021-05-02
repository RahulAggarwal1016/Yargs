const yargs = require("yargs");
const notes = require("./notes");

// customize yargs version
yargs.version("1.1.0");

// create new command

// i.e. node app.js add --title="something" --body="stuff"
yargs.command({
	command: "add",
	describe: "adding a note command",
	builder: {
		title: {
			describe: "note title",
			demandOptions: true,
			type: "string",
		},
		body: {
			describe: "note body",
			demandOptions: true,
			type: "string",
		},
	},
	handler: (argv) => {
		notes.addNote(argv.title, argv.body);
	},
});

yargs.command({
	command: "remove",
	describe: "remove a note command",
	builder: {
		title: "note title",
		demandOptions: true,
		type: "string",
	},
	handler: (argv) => notes.removeNote(argv.title),
});

yargs.command({
	command: "get",
	describe: "get all notes",
	handler: (argv) => notes.getNotes(),
});

yargs.parse();
