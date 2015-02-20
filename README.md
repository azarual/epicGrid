##epicGrid

####An infinite possibilities Grid System - let epicGrid do the maths, allowing you to use whatever grid style you like.

####Features 
* no dependencies - written in pure javascript
* lightweight - 1.4kb when minified and gzipped, only 2.5kb before
* responsive - built for mobiles, tablets and desktops - reacts to resize events
* no clearfix containers! - automagically calculates where to clear floats

####Setup
```html
  <script src="js/epicGrid.min.js"></script>
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

####Auto clearing of floats
clearing divs are added automatically, independently for each viewport. They are also removed, then re-added everytime a user resizes their device.

In the above example "clearing divs" would be added in two places for desktop and once for tablet

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

####Examples



####version

* 0.8 - initial release


####To-do

* Add options
* Add the ability to `hide` columns
* Optimize regex
