const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8")
    const objData = JSON.parse(data);

    if(req.url == "/"){
        res.end("Home Page");
    }else if(req.url == "/about"){
        res.end("About Page"); 
    }else if(req.url == "/userapi"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        console.log(objData[1].name);
        res.end(objData[1].name);

    }else{
        res.writeHead(404,{"Content-type": "text/html"});
        res.end("<h1>404 error page</h1>");
    }
})

server.listen(3000,"127.0.0.1",() => {
    console.log("listening on port 3000...");
});