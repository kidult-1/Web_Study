//express 모듈 로드
const express = require('express'); //express라는 상수에 express 저장(const: 상수 지정)
//var express = require('express'); //express라는 변수에 express 저장(var: 변수 지정)

const http  = require('http');
const route  = require('./route.js');


var app = express(); //앞서 정의한 상수를 함수처럼 호출
var httpServer = http.createServer(app); //http 모듈 내의 서버생성 함수, http 만들어 줌

app.use(express.static('views')); //정적파일들(ex.이미지,css파일 등)은 바뀌지 않는다 -> 폴더 그대로 넘겨주면 띄운다
//app.use(express.static('views.silverwo.png'));
//Http2ServerRequest.listenerCount(8080); //포트 번호 8080으로 임의설정
// '/' 서버를 접속하는 모든 사람들에게 hi라고 응답하기


//서버 시작
httpServer.listen(8080);




//express 사용

console.log("hello, world!");
