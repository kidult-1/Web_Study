# css base

## 선택자(Selector)
```
대상 {
  속성 : 값;
}
```

## 선택자 우선순위
1. `!important`를 붙인 속성
2. HTML에서 style을 직접 지정한 속성
3. `#id`로 지정한 속성
4. `.클래스`, `:추상클래스` 로 지정한 속성
5. `태그이름`으로 지정한 속성
6. 상위 객체에 의해 상속된 속성


## reset.css

모든 웹 브라우저는 기본 스타일이 있어서 CSS가 없어도 작동한다.

reset.css는 기본적인 HTML 요소의 CSS를 초기화해서 통일하는 용도로 사용한다.

> Eric Meyer’s reset : https://meyerweb.com/eric/tools/css/reset/
normalize.css : https://necolas.github.io/normalize.css/

## position 속성

`static` : 기본 위치

`relative` : 상대 위치, 현재 위치를 기준으로 이동한다.

`absolute` : 절대위치

`relative`인 컨테이너 내부에 `absolute`인 객체가 있으면 `relative`를 기준으로 잡는다.

정확히는 `absolute` 요소를 포함하는 상위 조상 요소 중, 가장 가까운 `static(기본)`이 아닌 요소를 기준으로 잡는다.

기준이 없으면 (0, 0)을 기준으로 잡는다.

```
a.banner .name {
  position: absolute;
  top: 100px;
  left: 90px;
}
```

`fixed` : (0, 0)을 기준으로 하며 스크롤을 해도 유지된다.


## 속기형 작성법

> background : color image repeat attachment position

> font : (font-style font-variant font-weight) font-size(/line-height) font-family

> transition : transition-property transition-duration transition-timing-function transition-delay

## 가상 클래스
가상으로 클래스를 설정한 것처럼 작동하는 클래스

하이퍼링크와 관련된 가상 클래스
- `:link` : 하이퍼링크의 초기 상태
- `:visited` : 하이퍼링크의 방문 상태
- `:hover` : 마우스 포인터를 올려놓은 상태
- `:active` : 마우스로 클린한 상태
- `:focus` : 포커스된 상태를 식별, input / a / area
