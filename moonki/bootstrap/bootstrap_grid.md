# Bootstrap 4 : Grid

## LEARN BOOTSTRAP 4: GRID

**Bootstrap 4 has a grid system implemented using flexbox**

a grid system based on [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

### Containers

**부트스트랩은 CSS rulesets을 적용하기 위해서 class명을 사용한다.**

```html
<div class="container">
  <div class="row">
    <div class="col">
      <!-- A column inside a row inside a container! -->
    </div>
  </div>
</div>
```

`containers` are the basis of Bootstrap’s grid

Inside containers, nest `rows` as immediate children

Then, nested inside rows are `columns`

**container -> row -> column**

```html
<div class="container"></div>
```

창을 조절하면 일정한 길이씩 늘어나거나 줄어든다.

```html
<div class="container-fluid"></div>
```

항상 entire width를 차지한다.

```html
<div class="col-4"></div>
```

`col`의 너비를 지정하기

```html
<div class="col-auto"></div>
```

`col` 안에 있는 content에 맞도록

**Bootstrap’s grid follows a 12 column system**

### Breakpoints
반응형 웹 디자인

Bootstrap categorizes screen sizes into `5 categories` or as `breakpoints`:
- extra small ( < 576 px )
- small ( ≥ 576 px )
- medium ( ≥ 768 px )
- large ( ≥ 992 px )
- extra large ( ≥ 1200 px )

naming convention : `col-{breakpoint}-{width}`

- {breakpoint} : sm, md, lg, xl, 생략하면 xs
- {width} : 1 to 12

```html
<div class="col-sm-8"></div>
```

breakpoint보다 크면 해당 width로 바뀐다.

**Combining Bootstrap Classes**

```html
<div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-3">
```

## document

추가적인 정보는 [document](https://getbootstrap.com/docs/4.1/layout/grid/)를 참고
