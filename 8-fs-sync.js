 

 const {readFileSync,writeFileSync} =  require("fs")

 const first  =  readFileSync("./content/first.txt","utf-8")
 const second  =  readFileSync("./content/second.txt","utf-8")

//  console.log(first,second)

writeFileSync(
    "./content/new-writeup.txt",
    "Helle here is an entire new file created outside",
    // if u want to add instead of oride
    {flag:"a"}
)