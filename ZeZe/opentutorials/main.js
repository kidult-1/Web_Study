var express = require('express')
var app = express()
var fs = require('fs')
var template = require('./lib/template.js')
var sanitizeHtml = require('sanitize-html')
var path = require('path')
 
//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response) { 
  fs.readdir('./data', function(error, filelist){

    if (filelist == undefined) {
        // folder may not exist
        response.send('./data not found');
        return;
    }

    var title = '암시롱 안해';
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    //creat라는 링크로 덤어가면 template.js 모듈 나오기
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">create</a>`
    );
    //var html: string => 문자열이 사이트에 전송
    response.send(html);
  });
});
/* /page에 /a 출력****
app.get('/page', function(req, res) { 
  return res.send('/a');
});
*/

// /page + /원하는 단어(req.params) 입력시
// {"pageId":"req.params"} 출력
app.get('/page/:pageId', function(request, response) { 

    fs.readdir('./data', function(error, filelist){
        var filteredId = path.parse(request.params.pageId).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){ //description: 본문
          var title = request.params.pageId;
          var sanitizedTitle = sanitizeHtml(title);
          var sanitizedDescription = sanitizeHtml(description, {
            allowedTags:['h1']
          });
          var list = template.list(filelist);
          var html = template.HTML(sanitizedTitle, list,
            `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
            ` <a href="/create">create</a>
              <a href="/update?id=${sanitizedTitle}">update</a>
              <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${sanitizedTitle}">
                <input type="submit" value="delete">
              </form>`
            );
    //var html: string => 문자열이 사이트에 전송      
    response.send(html);
        });
    });
});
app.listen(3000, function() {
console.log('Example app listening on port 3000!')
});