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
