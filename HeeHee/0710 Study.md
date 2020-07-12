#Javascript
도서 : <strong>자바스크립트+제이쿼리 입문</strong> (이지스퍼블리싱, 정인용 지음)

<section>
<h4>선택자</h4>
<ul>
<li>기본 선택자</li>
<ul>
<li>직접 선택자</li>
<li>인접 관계 선택자
</li>
</ul>
<li>탐색 선택자</li>
<ul>
<li>위치 탐색 선택자</li>
<li>속성 탐색 선택자</li>
</ul>
</ul>
</section>
<br>
<h6>직접 선택자 예시</h6>
```javascript
$(function(){
	$("*").css("border","1px solid blue");
});
```
*은 모든 요소를 선택한다.
1. 모든 요소의 두께를 1px 파란색 실선으로 지정하는 코드이다.
<br>
<h6>인접 관계 선택자 예시</h6>
```javascript
$(function(){
	$("#list_1").parent()
	.css("border", "2px dashed #f00");
});
```
\#은 id를 뜻하는 기호이다.
1. id값이 "list_1"인 요소의 부모 요소를 선택하여, 해당 요소의 두께를 2px 빨간색 파선으로 변경한다.
<br>
<h6>위치 탐색 선택자 예시</h6>
```javascript
$(function(){
	$("#menu li:first")
	.css({"background-color":"#ff0"});

    $("#menu li:last")
    .css({"background-color":"#0ff"});

});

````
기본 선택자로 선택한 요소들은 배열의 형태로 저장된다.
1. menu의 하위 요소의 배열에서 첫 번째 요소만을 선택하여 배경색을 바꾼다.
2. menu의 하위 요소의 배열에서 마지막 요소만을 선택하여 배경색을 바꾸는 코드이다.
<br>
<h6>속성 탐색 선택자 예시</h6>
```javascript
$(function () {
    $("#wrap a[target]").css({ color: "#f00" });

    $("#wrap a[href^=https]").css({ color: "#0f0" });

    $("#wrap a[href$=net]").css({ color: "#00f" });

    $("#wrap a[href*=google]").css({ color: "#000" });

    $("#member_f :text").css({ "background-color": "#ff0" });

    $("#member_f :password").css({ "background-color": "#0ff" });
});
````

1. id가 wrap인 요소의 하위 요소 중 target속성을 포함한 요소를 선택한다.
2. id가 wrap인 요소의 하위 요소 중 href가 https로 시작하는 요소를 선택한다.
3. id가 wrap인 요소의 하위 요소 중 href가 net으로 끝나는 요소를 선택한다.
4. id가 wrap인 요소의 하위 요소 중 href가 google을 포함하는 요소를 선택한다.
5. id가 member_f인 요소의 하위 요소 중 속성 값이 text인 요소를 선택한다.
6. id가 member_f인 요소의 하위 요소 중 속성 값이 password인 요소를 선택한다.
   <br>

#HTML

<section>
<ul>
<li>
<p>
<h5>텍스트 효과 태그 : strong, u</h5>
strong은 해당 텍스트를 굵게 표시하는 태그이다. u는 해당 텍스트에 밑줄을 긋는 태그이다.
</p>
</li>
<li>
<p>
<h5>헤드 태그 : h</h5>
h는 헤드 태그인데, 크기가 큰 1부터 작은 6까지 총 6종류가 있다. 
</p>
</li>
<li>
<p>
<h5>줄바꿈 태그 : br, p</h5>
줄바꿈 태그에는 두 가지가 있다. br은 단순히 개행을 추가하는 것이다. 반면 p는 paragraph의 약자로, 한 단락을 명시적으로 표기해주며 자동적으로 문단과 문단 사이의 간격을 추가한다.
</p>
</li>
</ul>
</section>
