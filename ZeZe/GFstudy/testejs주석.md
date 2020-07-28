# test.ejs
input 입력칸 생성
    <button id="my_button_find">find a message</button>

버튼 생성
    <button id="my_button_*">send a message</button>  

1. 저장하는 버튼: my_button
2. 찾는 버튼: my_button_find

### 버튼 별로 누르면 이벤트 발생 되는 함수 만듦
1. 저장 버튼 이벤트 <script> 함수
$("#my_button").click(function (){}
버튼을 클릭하면 click 되었다 라는 문구의 알람창이 뜨게 함
  
let value = $("#my_input").val();
입력창에 클라이언트가 기입한 데이터를 value가 받음

### $.ajax: jquery문  
url: '/message' : 데이터 뜨는 url
message: value : 입력값의 value가 message라는 content로 넘어감



### REST(Representational State Transfer) 개념:
자원을 이름으로 구분해, 자원의 정보를 주고 받는 것을 의미 뭔 솔;

예) 자원: 소프트웨어가 관리하는 모든 것 ex. 문서, 그림 등등

자원의 이름: db의 user

정보 전달: json, xml을 통해 데이터 주고 받는게 일반적

CRUD 개념에 적용
Creat: 생성(POST)
Read: 조회(GET)
Update: 수정(PUT)
Delete: 삭제(DELETE)
+
정보조회(HEAD)

###  send a message 눌렀을 때 발생되는 이벤트

method: 'POST' => jquery 함수 중 POST를 사용하겠다란 뜻

success: function(response) {
    alert(response);

=> 응답이 성공되면 호출된다

반대로 
error: function(response) {
    alert(response);

=> 응답이 실패일 경우 호출된다

+
complete: function(response) {
    alert(response);

=> error나 success 함수가 수행된 후 실행되는 함수

###  find a message 눌렀을 때 발생되는 이벤트
$("#my_button_find").click(function (){

$.ajax({
    method: 'GET', 
    => 데이터 조회할 수 있게 함
    url: '/message',
    => localhost:port번호/message에서 데이터 조회 가능               
    

1.을 누르면 서버가 db에 접근?해서 값 저장
client는 db에 접근하는게 아니라 서버에 값을 넘겨주기만 하면 된다

test.ejs 에서 클라이언트가 서버에게 요청하고 응답을 받는다

db에 접근해야하는 요청일 때는 서버가 db에 접근한다


1.을 누르면 input에 작성한 값이 db에 저장
2.를 누르면 db에 저장된 값이 alert로 출력

### 클라이언트가 서버에 요청해서 DB에 저장 

몽고디비 연결
mongoose 모듈 불러오기
몽구스 스키마 만들기
content라는 변수에 클라이언트가 기입한 데이터 저장
연결되면 서버 접속 + 서버성공이라고 띄우기
연결 실패시 서버 키지X