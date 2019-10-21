var http = require('http');
var memeModule = require('./meme-module');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.url != '/favicon.ico'){
    var q = url.parse(req.url, true);

    if(q.search != null){
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        fs.readFile('memes/' + q.query.meme, (err, image)=>{
            res.end(image)
        });
    }else if(q.path != '/'){
        console.log("DDD")
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        var path = q.path.substr(1);
        console.log(path);
        fs.readFile(path, (err, image)=>{
            res.end(image)
        });
    } else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(memeModule.getList());
    }
}
  }).listen(8080);