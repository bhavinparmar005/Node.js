const fs = require("fs");
// fs.writeFile("hello.txt", "Hello, World!", (err) => {
//   if (err) {
//     console.log("Error writing file:", err);
//   } else {
//     console.log("File written successfully");
//   }
// });

// fs.readFile("hello.txt","utf8" ,(err,data)=>{
//     if(err){
//         console.log("Error Read file: " ,err)
//     } else{
//         console.log("file data is : -" ,data)
//     }
// })


// fs.unlink("hello.txt" , (err)=>{
//  if(err){
//     console.log(err);
    
//  }
//  else{
//     console.log("File deleted");
    
//  }
// })

fs.appendFile("hello.txt" , " maro aa....",(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("append  data Exiting file");
        
    }
})