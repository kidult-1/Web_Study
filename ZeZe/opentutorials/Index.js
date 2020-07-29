//express 모듈 로드
const express = require('express'); //express라는 상수에 express 저장(const: 상수 지정)
//var express = require('express'); //express라는 변수에 express 저장(var: 변수 지정)
const fs = require('fs');
const template = require('./lib/template.js');
const http  = require('http');
const route  = require('./route.js');
const { fstat } = require('fs');


var app = express(); //앞서 정의한 상수를 함수처럼 호출
var httpServer = http.createServer(app); //http 모듈 내의 서버생성 함수, http 만들어 줌

app.use(express.static('views')); //정적파일들(ex.이미지,css파일 등)은 바뀌지 않는다 -> 폴더 그대로 넘겨주면 띄운다
//app.use(express.static('views.silverwo.png'));
//Http2ServerRequest.listenerCount(8080); //포트 번호 8080으로 임의설정
// '/' 서버를 접속하는 모든 사람들에게 hi라고 응답하기
app.get('/',function(req,res){
    fs.readdir('./data', function(error, filelist){
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = template.list(filelist);
        var html = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`
        ); 
        response.send(html);
      });
    });

app.get('/page', function(req, res) { 
    return res.send('/page');
});

//서버 시작
app.listen(3000, function(){
    console.log('3000');
});




//express 사용

console.log("hello, world!");
