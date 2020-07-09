# JavaScript 공부

## 함수

### 개요
function 키워드로 함수를 선언하며, 괄호 안에서 매개변수를 받음
return을 통해 값을 반환

```
function plus(a, b) {
	var sum = a + b;
	return sum;
}
```

### 함수의 범위
함수 내부에서 선언한 변수는 외부에서 참조할 수 없다.
함수안에 함수 선언이 가능 -> 이 경우에도 외부의 함수에서 내부의 변수를 참조할 수는 없다.
```
function myFunc() {
	var myVar = 10;
	return a;
}
console.log( myFunc() ); // 10
console.log( myVar ); // undefined
```
