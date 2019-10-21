exports.getList = function(){
    var fs = require('fs');
    var fileNames = "";
    var files = fs.readdirSync('./memes/');
    for (let index = 0; index < files.length; index++) {
        fileNames += '<a href="http://localhost:8080/?meme=' + files[index] + '">' + files[index] + '</a><br>\n';
    }
    return fileNames;
};