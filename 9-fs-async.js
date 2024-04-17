const {readFile,writeFile} =  require("fs")


readFile("./content/first.txt" , "utf-8" , (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})


writeFile("./content/asyn-new-file.text", "this is a new asynchronous file",(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)  
})