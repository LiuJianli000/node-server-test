var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res){
    
    var pathObj = url.parse(req.url,true)
    console.log(pathObj)

    switch(pathObj.pathname){
        case '/getWeather':
            var ret
            if(pathObj.query.city == 'beijing'){
                ret = {
                    city: 'beijing',
                    weather: 'sunny'
                }
            }else{
                ret = {
                    city: pathObj.query.city,
                    weather: 'unknow'
                }
            }
            res.end(JSON.stringify(ret))
            break;
        case '/user/123':
            res.end(fs.readFileSync(__dirname + '/sample/user'))
            break;
        
        default:
            res.end(fs.readFileSync(__dirname + '/sample' + pathObj.pathname))
    }
}).listen(8080)