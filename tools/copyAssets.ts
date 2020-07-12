import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/views", "dist/" );

// This is where we can seed initial db data if not exist