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

[Bootstrap’s text utility classes](https://getbootstrap.com/docs/4.2/utilities/text/)

예제)
```html
<p class="text-uppercase font-italic text-right">
  First, assign a class to style this text so that it is entirely uppercased.
  After you've assigned the appropriate class to make this text uppercased, assign another class to make this text italicized.
  Finally, browse Bootstrap's documentation to right align this text.
</p>
```

## Element Positioning
[Bootstrap’s positioning documentation](https://getbootstrap.com/docs/4.2/utilities/position/)

[CSS 문법](https://developer.mozilla.org/en-US/docs/Web/CSS/position)과 동일하게 동작한다.


`sticky-top`과 `fixed-top`은 거의 비슷하게 동작한다. 둘 다 항상 제일 위에 고정되어있다. 하지만 sticky는 먼저 공간을 차지한다.

## The Navigation Component
Bootstrap offers a collection of components, such as a navbar, buttons, a carousel/slideshow for images, and much more!

[Bootstrap’s nav documentation](https://getbootstrap.com/docs/4.2/components/navs/)

```html
<div class="container">
    <!-- Row containing nav component -->
    <div class="row">
      <div class="col">
        <!-- Manipulate the elements below: -->
        <nav class="nav">
				  <a class="nav-link" href="#">About Us</a>
          <a class="nav-link" href="#">Contact Us</a>
          <a class="nav-link" href="#">Subscribe</a>
        </nav>
      </div>
    </div>
    <!-- End of row containing nav component -->
  </div>
```

## The Button Component

with Bootstrap we can make button components that have more styling

[Bootstrap’s button documentation](https://getbootstrap.com/docs/4.2/components/buttons/#examples)

```html
<button class="btn btn-info">
  lick Here for more info
</button>
```

```html
<button class="btn btn-link">
  This button acts like a link
</button>
```

## Collapsing a Component

[Bootstrap’s collapse documentation](https://getbootstrap.com/docs/4.2/components/collapse/)

```html
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  This button controls the following div's visibility.
</button>

<div class="collapse" id="collapseExample">
  <p>This content's visibility gets toggled</p>
</div>
```

## Creating a Navbar

[Bootstrap’s Navbar documentation](https://getbootstrap.com/docs/4.2/components/navbar/#supported-content)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand Goes Here</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Current Page Link <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Another Page Link</a>
      </li>
    </ul>
  </div>
</nav>
```

- `"navbar"` : `<nav>`를 Bootstrap navbar로 만든다.
- `"navbar-expand-lg"` : `<div class="collapse navbar-collapse">` 를 만든다. 그 breakpoint보다 작으면 menu 버튼을 만든다.(toggles the visibility of the navbar menu to save space)
- `"navbar-light"` : color scheme
- `"bg-light"` : background color
- `<a class="navbar-brand" href="#">` : brand/logo가 될 수 있는 이미지나 텍스트
- `<ul>` 와 감싸진 `<li>`는 모두 nav component로 바뀐다.
- 첫번째 `<li>`는 `"active"`클래스를 가진다. 현재 페이지를 highlight 해준다.

## Jumbotron, Card, Carousel Component

[Bootstrap’s jumbotron documentation](https://getbootstrap.com/docs/4.2/components/jumbotron/)

[Bootstrap’s Card documentation](https://getbootstrap.com/docs/4.2/components/card/#example)

[Bootstrap’s Carousel documentation](https://getbootstrap.com/docs/4.2/components/carousel/)
