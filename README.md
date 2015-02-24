##epicGrid

#####An infinite possibilities Grid System - let epicGrid do the maths, allowing you to use whatever grid style you like.

####Features 
* no dependencies - written in pure javascript
* lightweight - 976 bytes when minified and gzipped, only 2.68kb before
* easy to use - if you can use fractions, you can use epicGrid
* responsive - includes upto 5 breakpoint - reacts to resize events
* no clearfix containers! - automagically calculates where to clear floats

####Setup
```html
  <script src="js/epicGrid.min.js"></script>
</body>
```
or include in the head and call before the closing &lt;/body&gt;
```html
  <script src="js/epicGrid.min.js"></script>
</head>

  <script>
    epicGrid();
  </script>
</body>
```
####How to use

You write column widths like so `prefix-col-X-Y`, where `X ÷ Y` is the columns width and the `prefix` is either `x, s, m, l or h`, these represent the different screen sizes.

Prefix | Size
-------|-----
`x`| `<=320px`
`s`| `<=656px`
`m`| `<=1024px`
`l`| `<=1440px`
`h`| `>1440px`

#### Simple Column Example

```html
<div class="m-col-3-4" id="main">...</div>
<div class="m-col-1-4" id="sidebar">...</div>
```

On a screen size greater than 656px wide, this markup would result in 2 columns - a main and a sidebar, three quarters and one quarter wide, respectively. On a screen size less than or equal to 656px, the columns would both be 100% wide, with the sidebar below the main column.

######NOTE

In the above example, since there is no `x-col` or `s-col` markup columns will revert to a width of 100% wide.

In the above example, since there is no `l-col` or `h-col` markup columns will **inherit** the width of the last largest breakpoint, ie. `m-col`.

#### Simple Centered Example

```html
<div class="s-center-6-7 l-center-3-4" id="first">...</div>
<div class="s-center-6-7 l-center-3-4" id="second">...</div>
```

On devices greater than 320px wide both columns will be six sevenths wide and centered. On devices with a screen size greater than 1024px wide both columns will be three quarters wide and centered. Since the smallest declared breakpoint is `s-center`, both columns will become 100% wide on devices with a screen size less than or equal to 320px wide.

######NOTE
There is no point declaring a new breakpoint if it is the same as the previous one ie.
```html
<div class="s-center-6-7 l-center-3-4">...</div>
// is the same as
<div class="s-center-6-7 m-center-6-7 l-center-3-4 h-center-3-4">...</div>
```



#####Auto clearing of floats
clearing divs are added automatically, independently for each viewport. They are also removed, then re-added everytime a user resizes their device.

In the above example "clearing divs" would be added in two places for desktop and once for tablet.
"clearing divs" are added when the column count equals 1 ie. `3/4 + 1/4 = 1`

```html
<div class="d-col-3-4 t-col-5-8 m-center-8-9" id="main">
  <div class="d-col-5-7 t-center-9-10" id="article">...</div>
  <div class="d-col-2-7 t-center-9-10" id="aside">...</div>
  <!--<div style="clear:both"></div>  desktop-->
</div>
<div class="d-col-1-4 t-col-3-8 m-center-9-10" id="sidebar">...</div>
<!--<div style="clear:both"></div>  desktop and tablet-->
```

In this example you can see how the auto-insertion of "clearing divs" allows you to create layouts that would be impossible when using standard clearfix containers.

```html
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<!--<div style="clear:both"></div>  mobile  -->
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<!--<div style="clear:both"></div>  tablet  -->
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<!--<div style="clear:both"></div>  desktop and mobile  -->
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<!--<div style="clear:both"></div>  tablet and mobile  -->
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<!--<div style="clear:both"></div>  desktop and mobile-->
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<!--<div style="clear:both"></div>  tablet  -->
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<!--<div style="clear:both"></div>  mobile  -->
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<div class="d-col-1-4 t-col-1-3 m-col-1-2"></div>
<!--<div style="clear:both"></div>  desktop, tablet and mobile  -->
```
[demo](http://codepen.io/zhirkovski/full/yyKZxQ/)

#####centering columns

two centered columns, five sixths wide and eight thirteenths wide, simple.

```html
<div class="d-center-5-6"></div>
<div class="d-center-8-13"></div>
```
[demo](http://codepen.io/zhirkovski/pen/GgxzXm)


#####offset columns

three columns, with the last one offset to the right, equally simple.

```html
<div class="d-col-1-4"></div>
<div class="d-col-1-4"></div>
<div class="d-col-1-4 d-offset-1-4"></div>
```
[demo](http://codepen.io/zhirkovski/pen/KwoJeB)


#####displaced columns

The main centered column is 8/10ths wide, leaving 1/10th of free space on either side.
The first two displaced columns are aligned to the left/rigth margin of their parent.
The second two columns are displaced through the margin of their parent by 1/10th each.
Be careful when displacing columns through margins of parents, make sure you leave enough free space.

```html
<div class="d-center-8-10">
  <div class="d-col-3-5 d-left-0-1">...</div> <!-- aligned to the parent's left margin -->
  <p>...</p>
  <div class="d-col-3-5 d-right-0-1">...</div> <!-- aligned to the parent's right margin -->
  <p>...</p>
  <div class="d-col-3-5 d-left-1-10">...</div> <!-- pushed through the parent's left margin -->
  <p>...</p>
  <div class="d-col-3-5 d-right-1-10">...</div> <!-- pushed through the parent's right margin -->
  <p>...</p>
</div>
<div class="d-col-1-4 d-offset-1-4"></div>
```
[demo](http://codepen.io/zhirkovski/full/jEzdXv/)

####Nomenclature

Class Names cheatsheet | Description
-----------------------------|------------
`[d,t,m]-col-x-y`  | A column for the chosen viewport. X number of columnns wide from a total of Y
`[d,t,m]-center-x-y` | Center the column for that viewport. X number of columnns wide from a total of Y
`[d,t,m]-offset-x-y` | Offset the column to the right by X number of columns from a total of Y
`[d,t,m]-left-x-y` | Displace a column to the left by X number of columns from a total of Y
`[d,t,m]-right-x-y` | Displace a column to the right by X number of columns from a total of Y

* choose one of the prefixes `d`, `t` or `m`, for desktop, tablet or mobile eg. `d-col-1-2`
* classes `left`, `right` and `offset` must be accompanied with a `col` class to specify width.


####version

* 0.8 - initial release


####To-do

* Add options
* Add the ability to `hide` columns
* Optimize regex
