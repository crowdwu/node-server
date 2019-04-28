var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')
 //载入require模板

 //创建服务器
var server= http.createServer(function(request,response){
    setTimeout(function(){
        response.setHeader('Content-Type','text/html; charset=utf-8')
        response.writeHead(200, 'haha')
        var pathObj = url.parse(request.url,true) 
        console.log(pathObj) 
        console.log(request.url)  
        //解析路由
        switch(pathObj.pathname){
          case '/getTemperature':  //url有/getTemperature后缀返回数据
                var ret
                if(pathObj.query.city == 'Fujian'){
                  ret = {
                    city: 'Fujian',
                    temperature: '25'
                  }
                }else{
                  ret = {
                    city: pathObj.query.city,
                    temperature: '我啷个晓得'
                  }
                }
                response.end(JSON.stringify(ret))
                break;


          case '/user/123':    //url有/user/123后缀返回README文件
                response.end( fs.readFileSync(__dirname + '/README.md') )
                break;

         

                //默认返回静态文件
            default:  response.end(fs.readFileSync(__dirname+'/sample'+'/test.html'))
    }}),2000})
console.log('open http://localhost:8080')
server.listen(8080)



