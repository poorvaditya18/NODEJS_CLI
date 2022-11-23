let fs = require('fs');
let path = require("path");

// tree
function treeFn(dirPath) 
{
//   console.log("Tree command implemented for", dirPath);
  let destPath;
  if (dirPath == undefined) 
  {
    // console.log("kindly enter the correct path!");
    
    treeHelper(process.cwd(),"");
    return;
  } 
  else 
  {
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) 
    {
      treeHelper(dirPath,"");

    } 
    else 
    {
      console.log("kindly enter the correct path!");
      return;
    }
   }
}

function treeHelper(dirPath,indent)
{
    // we want to draw the tree structure of the folder

   // check is file or folder 
   //  if file then print 
   // if folder then go inside and check again
   let isFile = fs.lstatSync(dirPath).isFile();
   if(isFile==true)
   {
     let fileName = path.basename(dirPath);
     console.log(indent + "├──" +fileName);
   }
   else
   {
    // if directory then print and go inside
    let dirName = path.basename(dirPath);
    console.log(indent +"└── "+dirName);
    let children = fs.readdirSync(dirPath);
    for(let i=0;i<children.length;i++)
    {
        let childrenAdd = path.join(dirPath,children[i]);
        treeHelper(childrenAdd,indent+"\t");
    }
   }

}
module.exports = {
    treeKey:treeFn
}