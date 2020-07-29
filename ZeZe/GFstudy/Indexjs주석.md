
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
가지고 있는 데이터를 내가 원하는 형태의 데이터로 가공(parsing), 그 과정을 수행하는 메소드를 paraser이라 함

간단히 생각해 내가 원하는 언어의 구조로 바꿔주는 구문해석기다~~

번역은 compiler가 함

### BodyParser: 요청의 body 해석해주는 미들웨어
//use body-parser : post로 요청된 body를 쉽게 추출할 수 있는 모듈이다
app.use(express.urlencoded({extended:true}));
app.use(express.json());

HTTP POST 요청시 request body에 들어오는 데이터값을 읽을 수 있는 구문으로 파싱함과 동시에 req.body로 입력해주어 응답 과정에서 body 매개변수를 새롭게 전달한게 해주는 미들웨어?????
몬 솔???

간단히 말해 