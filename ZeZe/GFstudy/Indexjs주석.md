
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

### HTTP 메서드
엄청 많다 대표적인게 set, use, get, post 등등
앗 위에 친구들은 http 메서드가 아니다
test.ejs주석에 있는 친구들이 http 메서드!

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

간단히 말해 클라이언트가 데이터를 넣으면 test.ejs에서 POST한 내용이 url - endecode: 주소 형식으로 데이터를 보내고
json 파일로 변환? 

만약 본문이 텍스트 데이터일 때 해석하는 미들웨어는 Text.

Text를 쓸려면 body-parser을 설치(json으로 해석해주는건 express 내장 모듈에 있어서 따로 설치할 필요x)하고

app.use(bodyParser.text()); 사용

### ejs

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

view engine 은 어떠한 종류의 템플릿 엔진을 사용할지 나타냄

app.set('views', '폴더명') : views는 템플릿 파일들이 위치한 폴더 지정

### get

1. app.get(name)
예시.
app.get('title')
// => undefined

app.set('title', 'My Site') //app.set('키','값')
app.get('title')            //app.get(set의 키)
// => "My Site"             //set의 값 출력


2. app.get(path, callback[,callback])

예시.
app.get('/', function (req, res) {
  res.send('GET request to homepage')
})

### app.use
app.use는 미들웨어를 연결하는 부분

### 미들웨어란?
요청과 응답 중간에 위치
app.use와 자주 사용
app.use 매서드의 인자로 들어 있는 함수가 미들웨어 이다. 미들웨어는 use 메서드로 app에 장착한다. 
몬 솔 ㅠ

### app.post
예시.
app.post('/', function (req, res) {
  res.send('POST request to homepage')
})

app.post('/message',function(req,res){
=> /message에서 key값들을 posting
