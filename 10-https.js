const http =  require("http")

const server =  http.createServer((request,result)=>{

    if (request.url === "/"){
        result.end("welocme to my first web server")
    }
    else if(request.url === "/about"){
        result.end("welocme to my first web server about page")
    }else{

        result.end("opps error") 
    }

})

server.listen(4000)