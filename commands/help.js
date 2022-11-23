//Help implemented
let fs = require('fs');
let path = require("path");
function helpFn() 
{
    console.log(`    
          How To Use :
          ⚫ If you want help
          cmnd : pb help
          ⚫ If you want tree structure of your directory
          cmnd : pb "DIR_PATH"
          ⚫ If you want to organize all your files - this will organize all your files based upon the extension of the fileName.
          cmnd : pb organize "DIR_PATH" 

          Made with ❤️  by POORVADITYA BEHRE!
      `);
  }

  module.exports = {
    helpKey:helpFn
  }