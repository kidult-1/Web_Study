# html base
## html tag
`<!DOCTYPE html>` HTML5 문서임을 표시

`<html lang='ko'>` 사용될 언어가 한글임을 표시

`<meta charset='utf-8'>` 언어 인코딩 설정

`<span>`은 줄바꿈이 없다.

`<div>`는 줄바꿈을 한다.

`Empty Element` 내용이 없는 요소
- meta, img, area, br, hr, input, etc...

## Document Object Model
DOM

html -> head, body로 가지를 뻗는다.

body -> h1, h2, ul로 가지를 뻗는다.

노드 -> 노드

이러한 형제 요소로 구조화된다.

### 노드(Node)
- 요소 노드 : 태그
- 속성 노드 : 태그의 속성
- 텍스트 노드 : 태그가 감싸고 있는 텍스트

## html5

하지만 html5에서는 h1, h2, ul 등을 형제 요소로 구조화하지 않는다.

### 섹션(Section) 요소
html5에서 추가된 문서를 나누는 의미 요소

`<section>` 다용도

`<article>` 독립적인 문서

`<nav>` 내비게이션

`<aside>` 보조 내용

제목 태그를 하나만 가질 수 있다.

제목 태그가 여러개면 알아서 세션을 생성한다.

```html
<section>
  <h1> 섹션 제목 </h1>
</section>
<section>
  <h1> 섹션 제목 </h2>
</section>
```

```html
<section>
  <h1> 섹션 제목 </h1>
  <section>
    <h2> 섹션 제목 </h2>
  </section>
</section>
```
