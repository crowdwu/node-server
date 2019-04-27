var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')
 //载入require模板

 //创建服务器
var server= http.createServer(function(request,response){
    setTimeout(function(){
        response.setHeader('Content-Type','text/html; charset=utf-8')
        response.writeHead(200, 'hha')
        var pathObj = url.parse(request.url,true)
        console.log(pathObj) 
        console.log(request.url)
        switch(pathObj.pathname){
          case '/user/123':
                response.end( fs.readFileSync(__dirname + '/README.md') )
                break;
            default:  response.end(fs.readFileSync(__dirname+'/sample'+'/test.html'))
    }}),2000})
console.log('open http://localhost:8080')
server.listen(8080)
