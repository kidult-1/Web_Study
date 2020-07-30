# Bootstrap 4 : Utilities and Components

## LEARN BOOTSTRAP 4: UTILITIES AND COMPONENTS

`utility classes` that provide additional styling

`components` that each serve distinct purposes


## Adding Colors

```html
<p class="text-primary">This text is blue!</p>
```

documentation에 의해서 `text` class가 styling 된다.

`<p>` element의 color를 바꾸는 방법은 [Bootstrap’s color example](https://getbootstrap.com/docs/4.2/utilities/colors/#color)를 참고

```html
<div class="bg-success">
  Green! This signifies success!
</div>
```

documentation에 의해서 `background color`가 바뀐다.

`<div>` element의 color를 바꾸는 방법은 [Bootstrap’s background color examples](https://getbootstrap.com/docs/4.2/utilities/colors/#background-color)를 참고

예제)

```html
<p class="text-warning">
   Change the text color in this paragraph to yellow.
 </p>

 <div class="bg-info">
   Change the background in this div to teal.
 </div>
 <br>

 <div class="bg-success text-white">
   Alright, we want to have a green background AND change the text color to white.
 </div>
```


## Styling Text

전부 [Bootstrap’s text utility classes](https://getbootstrap.com/docs/4.2/utilities/text/)를 참고

예제)
```html
<p class="text-uppercase font-italic text-right">
  First, assign a class to style this text so that it is entirely uppercased.
  After you've assigned the appropriate class to make this text uppercased, assign another class to make this text italicized.
  Finally, browse Bootstrap's documentation to right align this text.
</p>
```

## Element Positioning
[Bootstrap’s positioning documentation](https://getbootstrap.com/docs/4.2/utilities/position/)을 참고

[CSS 문법](https://developer.mozilla.org/en-US/docs/Web/CSS/position)과 동일하게 동작한다.


`sticky-top`과 `fixed-top`은 거의 비슷하게 동작한다. 둘 다 항상 제일 위에 고정되어있다. 하지만 sticky는 먼저 공간을 차지한다.




## document

추가적인 정보는 [document](https://getbootstrap.com/docs/4.1/layout/grid/)를 참고
