
main.js 상단에는 모듈 로드하는게 국룰

const 타입을 사용해야 변경 ㄴㄴ

## express 모듈 생활코딩 강의 정리

### 라우팅
//모듈 선언
const express = require('express;);
//객체 선언
const app = express();

//get('경로',콜백함수)
app.get('/',(req,res) => res.send('hello world!));

== 같은 문법

app. get('\',function(req,res){
    return res.send('hello world');
});

//app이란 변수에 express 함수 객체 선언
app = express();


### paraser 