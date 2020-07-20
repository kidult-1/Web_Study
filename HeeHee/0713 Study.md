<h1>CSS</h1>
<h4>CSS기본 문법</h4>
<ol>
<li>
selecter
</li>
<li>
declaration
<ol>
<li>
property
</li>
<li>
value
</li>
</ol>
</li>
</ol>
<h3>CSS</h3>

```css
a {
  property: value;
}
```

<h4>Selector</h4>
위 코드의 a가 CSS의 selector(선택자)이다. 어떤 태그에 효과를 적용할 것인지 작성하는 것이 selector이다. 
<br>
<h4>Declaration</h4>
[property: value;]가 CSS의 declaration(선언 또는 효과)이다. 선택된 태그에 어떠한 효과를 줄 것인지 작성하는 것이 declaration이다.
Declaration의 property에는 color, padding, margin 등 변화를 주고 싶은 속성이 들어가며, value에는 해당 속성에 추가할 값이 들어간다.
<hr>
<h3>Box model</h3>
Box model은 특정 태그에 테두리를 설정하는 것이다. Property로 Border을 사용한다. Border의 두께를 5px으로, 선을 실선(solid)으로, 색을 파란색(blue)으로 설정하려면 Border: 5px solid blue; 와 같이 declaration을 작성하면 된다. value들의 순서는 상관이 없으며 띄어쓰기로 구분되어야 하고, 문장의 마지막에는 세미콜론(;)이 붙어야 한다.
<h3>Grid</h3>
Grid는 배치의 한 종류이다. div 태그를 이용하여 태그들을 묶은 후 CSS를 이용해 최상위 div의 display를 grid로 설정하면, 웹 페이지에 차례대로 div묶음들이 나타난다. 참고로 h 태그의 default display는 block이고, a 태그의 default display는 inline이다. 
<h3>Media query</h3>
Media query는 반응형 웹 페이지를 만들기 위해 사용된다. 개발자가 만든 웹 페이지가 컴퓨터, 스마트폰 등 화면의 크기가 다른 여러 디바이스에서 정상적으로 화면을 표시하기 위해 media query를 사용할 수 있다. @media(조건) 과 같은 코드를 이용하여 조건을 설정하고, 해당 조건을 만족했을 때 화면의 디자인을 어떻게 설정한 것인지를 body에 작성하면 된다.
