# JavaScript 공부

## 함수

### 형태
function 키워드로 함수를 선언하며, 괄호 안에서 매개변수를 받음
return을 통해 값을 반환

```javascript
function plus(a, b) {
	var sum = a + b;
	return sum;
}
```

### 함수의 범위
함수 내부에서 선언한 변수는 외부에서 참조할 수 없다.
함수안에 함수 선언이 가능 -> 이 경우에도 외부의 함수에서 내부의 변수를 참조할 수는 없다.

```javascript
function myFunc() {
	var myVar = 10;
	return a;
}
console.log( myFunc() ); // 10
console.log( myVar ); // undefined
```

### first-class object
js에서 함수는 first-class object다.
예를 들어서 이런식으로 코딩할 수도 있다.
```javascript
var plusFunc = function (a, b) {
	return a + b;
};
plusFunc(3, 5);
```
```javascript
function a(x) {
	var b = function(y) {
		return x + y;
	};
	return b;
}
a(3)(4);
```
```javascript
var moonki = {
	'age': 24,
	'run': function() {
		alert('running');
	},
	'sleep': function() {
		alert('sleeping');
	},
};
```

### 즉시 실행 함수
javascipt는 네임스페이스가 없다.
하지만 즉시 실행 함수를 통해서 비슷한 효과를 낼 수 있다.
```javascript
(function () {
	var a = 10;
	var b = 20;
	console.log(a + b); // 30
})();
```
익명함수를 만들고 바로 실행하는 코드
외부에서 접근하지 못하게 숨기거나 충돌을 방지하기 위해 많이 사용되는 기법이라고 한다.

```javascript
(function (b) {
	b.getElementById('content');
	...

})(document.body);
```
이런 식으로 매개변수 이름이 길 때 코드를 줄이는 효과를 낼 수 있기도 하다.

## 자료형
### Primitive type
- Boolean
- null
- undefined
- Number
- String
### Object type
- Primitive type 외의 모든 변수는 객체 타입
- Object 클래스, 배열, 함수, ...
- Reference type이다. 메모리 주소를 가진다.

### NaN과 Infinity
`NaN`은 숫자가 아님을 의미 : Math.sqrt(-1)

`Infinity`는 무한대를 의미 : 42 / 0

### 배열
```javascript
array.unshift('element'); // 맨 앞 추가
array.shift(); // 맨 앞 반환
array.indexOf('element');
```
```javascript
var array = ['a', 'b', 'c', 'd'];
var removed = array.splice(1, 2);
// array = ['a', 'd']
// removed = ['b', 'c']
```


## 객체

자바스크립트는 클래스 개념이 없는 언어다.

자바스크립트에서 클래스를 정의하는 3가지 방법

https://www.phpied.com/3-ways-to-define-a-javascript-class/
### using a function
This is probably one of the most common ways.
```javascript
function Apple (type) {
	this.type = type;
	this.color = "red";
	this.getInfo = function() {
		return this.color + ' ' + this.type + ' apple';
	}
}

var apple = new Apple('macintosh');
```
```javascript
function Apple (type) {
	this.type = type;
	this.color = "red";
}
Apple.prototype.getInfo = function() {
	return this.color + ' ' + this.type + ' apple';
}
```
### using object literals
```javascript
var apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}
```
Such an object is also sometimes called singleton.
**Singleton** : only one single instance
### singleton using a function
```javascript
var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}
```

## DOM
문서 객체 모델(DOM; Document Object Model)

객체 지향 모델로써 구조화된 문서를 표현하는 형식

동적으로 HTML에 접근하고 변경하는 수단

같은 코드가 여러 브라우저에서 동일하게 동작한다.

### QuerySelector

`getElementById()` : 반환값 객체

`getElementsByClassName()` : 반환값 배열

`getElementsByTagName()` : 반환값 배열

`querySelector()` : css 선택자, 반환값 객체

`querySelectorAll()` : css 선택자, 반환값 배열

문서 전체에서 찾을 때에는 document 전역 변수 사용

document뿐만 아니라 모든 객체 모델에 사용할 수 있다.

        

QuerySelector로 찾은 객체는 몇 가지 속성으로 접근할 수 있다.
- id
- className
- tagName
- value
- style
- innerHTML
- outerHTML : 선택된 노드를 포함하여 HTML 수정

사용자 정의 속성은 위와 같이 접근하지 못한다.

다음 4가지 메소드로 접근할 수 있다.

- getAttribute(name)
- setAttribute(name, value)
- hasAttribute(name)
- removeAttribute(name)


## jQuery

javascript의 라이브러리

흔히 쓰는 쿼리들을 간결한 함수로 처리할 수 있도록 해주는 것 같다.

a태그의 color를 모두 red로 바꾸는 코드
```javascript
$('a').css('color', 'red');
```

### using jQuery with a CDN

CDN : Contents Delivery Network

https://jquery.com/download/

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

## 더 공부해볼 것들

document 객체 / DOM 객체 / window 객체

ajax

cookie

offline web application

webRTC, speech, webGL, ...
