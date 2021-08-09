const fs = require('fs');
const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/html'})
    const url = req.url;
    if (url === '/about'){
        res.write('This is About Page');
        res.end();
    } else if (url === '/contact'){
        res.write('This is Contact Page');
        res.end();
    } else {
        // res.write('<h1>Hello World</h1>');
        fs.readFile('./index.html',(err,data) => {
            if(err) {
                res.writeHead(404)
                res.write('File Not Found')
            }else{
                res.write(data)
            }
            res.end();
        })
    }

    console.log(url);

});

server.listen(port,()=>{
    console.log('Listening On Port 3000..');
})