##epicGrid

####An infinite possibilities Grid System - let epicGrid do the maths, allowing you to use whatever grid style you like.

####Features 
* no dependencies - written in pure javascript
* lightweight - 1.4kb when minified and gzipped, only 2.5kb before
* easy to use - if you can use fractions, you can use epicGrid
* responsive - built for mobiles, tablets and desktops - reacts to resize events
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
Do you like to use a 12 column grid system?
```html
<div class="d-col-8-12" id="main">...</div>
<div class="d-col-4-12" id="sidebar">...</div>
```
A 16 column grid system?
```html
<div class="d-col-11-16" id="main">...</div>
<div class="d-col-5-16" id="sidebar">...</div>
```
A 237 column grid system?
```html
<div class="d-col-185-237" id="main">...</div>
<div class="d-col-52-237" id="sidebar">...</div>
```
A mixed grid system?
```html
<div class="d-col-3-4 t-col-5-8 m-center-8-9" id="main">
  <div class="d-col-5-7 t-center-9-10" id="article">...</div>
  <div class="d-col-2-7 t-center-9-10" id="aside">...</div>
</div>
<div class="d-col-1-4 t-col-3-8 m-center-9-10" id="sidebar">...</div>
```
Truth be told, you can use any style you want. epicGrid does all the maths, calculating the column widths independently for each device so that you can concentrate on the layout. other features include

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
