let fs = require('fs');
let path = require("path");

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



// organize
function organizeFn(dirPath) 
{
  // console.log("Organize command implemented for ", dirPath);

  // 1. Input -> directory path given
  let destPath;
  if (dirPath == undefined) 
  {
    // console.log("kindly enter the correct path!");
    destPath = process.cwd();
    return;
  } 
  else 
  {
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) 
    {
      // 2. Create -> organized _files -> directory
      // this will give the path
      destPath = path.join(dirPath, "organized_files");
      if (fs.existsSync(destPath) == false) 
      {
        fs.mkdirSync(destPath);
      }
    } 
    else 
    {
      console.log("kindly enter the correct path!");
      return;
    }
  }
  organizeHelper(dirPath, destPath);
}

function organizeHelper(src, destPath) 
{
    // 3. Identify categories of all the files present in that input directory.
    let childName = fs.readdirSync(src);
    // console.log(childName);
    for (let i = 0; i < childName.length; i++) 
  {
      let childAddress = path.join(src, childName[i]);
      
      let isFile = fs.lstatSync(childAddress).isFile();
      
    if (isFile) 
    {
        // console.log(childName[i]);
        let category = getCategory(childName[i]); // this will return the extension of the file
        console.log(childName[i], "belongs to --> ", category);
        //4.
        sendFiles(childAddress, destPath, category);
    }
}
}


function sendFiles(srcFilePath,dest,category)
{
    
    // 4. copy/cut files to that organized directory inside of any of category folder
    let categoryPath = path.join(dest,category);
    
    if(fs.existsSync(categoryPath)==false)
    {
        
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath); //file path
    let destFilePath = path.join(categoryPath,fileName); //destination path of the file
    fs.copyFileSync(srcFilePath,destFilePath);

    fs.unlinkSync(srcFilePath);

    console.log(fileName," copied to ",category);
}


function getCategory(name) 
{
  let ext = path.extname(name);
  ext = ext.slice(1);
  for (let type in types) 
  {
    let currentType = types[type];
    for (let i = 0; i < currentType.length; i++) 
    {
      if (ext == currentType[i]) {
        return type;
      }
    }
  }
  return "others"; //no match in categories
}



module.exports ={
    organizeKey:organizeFn
}