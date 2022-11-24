let fs = require('fs');
let http = require('http');

let date_ob = new Date();
let source = `${date_ob.getDate()}`+"-"+`${date_ob.getHours()}.txt`
let text = `${date_ob}`


const server = http.createServer((req,res)=>{
    fs.writeFile(source , text , () => {
        console.log("file updated successfully")
    })
    // req.writeHead(200, {'Content-Type': 'application/json'})
    res.end("raghavan is a great man")
})

server.listen(8000, () => console.log("App is listening on port " + 8000));


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);