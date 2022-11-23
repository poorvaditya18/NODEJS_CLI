#!/usr/bin/env node

const { dir } = require("console");
let fs = require("fs");
let path = require("path");
let helpObj = require('./commands/help');
let treeObj = require('./commands/tree');
let organizeObj = require('./commands/organise');
// taking input from command line
let inputArr = process.argv.slice(2); // user input starts from 2 as first two is node <filename>
// console.log(inputArr);

// User will provide these commands ->
// node main.js tree "directorypath"
// node main.js organize "directorypath"
// node main.js help

let command = inputArr[0];

let types = {
  media: ["mp4", "mkv"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

switch (command) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;

  case "organize":
    organizeObj.organizeKey(inputArr[1]);
    break;
  case "help":
    helpObj.helpKey();
    break;
  default:
    console.log("Please Input Right Command !!");
    break;
}







