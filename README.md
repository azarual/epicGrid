##epicGrid

#####An infinite possibilities Grid System - let epicGrid do the maths, allowing you to use whatever grid style you like.

####Features 
* no dependencies - written in pure javascript
* lightweight - 976 bytes when minified and gzipped, only 2.68kb before
* easy to use - if you can use fractions, you can use epicGrid
* responsive - includes upto 5 breakpoints - reacts to resize events
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

| type | Prefix | Size |
|------|--------|------|
|eXtra small |`x`| |
|Small |`s`| `greater than 320px`|
|Medium |`m`| `greater than 656px`|
|Large |`l`| `greater than 1024px`|
|Huge |`h`| `greater than 1440px`|

#### Simple Column Example

The bread-and-butter of any grid system is its ability to create columns. epicGrid does this like so...

```html
<div class="m-col-3-4" id="main">...</div>
<div class="m-col-1-4" id="sidebar">...</div>
```

On a screen size greater than 656px wide, this markup would result in 2 columns - a main and a sidebar, three quarters and one quarter wide, respectively. On a screen size less than or equal to 656px, the columns would both be 100% wide, with the sidebar following after the main column.

######NOTE

In the above example, since there is no `x-col` or `s-col` markup, columns will revert to a width of 100% wide.

In the above example, since there is no `l-col` or `h-col` markup, columns will **inherit** the width of the previous largest breakpoint, ie. `m-col`.

#### Simple Centered Example

Centered columns are columns that are centered - shocker!

```html
<div class="s-center-6-7 l-center-3-4" id="first">...</div>
<div class="s-center-6-7 l-center-3-4" id="second">...</div>
```

On devices greater than 320px wide both columns will be six sevenths wide and centered. On devices with a screen size greater than 1024px wide both columns will be three quarters wide and centered. Since the smallest declared breakpoint is `s-center`, both columns will become 100% wide on devices with a screen size less than or equal to 320px wide.

######NOTE
There is no point declaring a new breakpoint if it is the same as the previous one ie.
```html
<div class="s-center-6-7 l-center-3-4">...</div>
<!-- is the same as -->
<div class="s-center-6-7 m-center-6-7 l-center-3-4 h-center-3-4">...</div>
```

#### Simple Offset Example

Offsetting a column will push it to the right by the deired amount.

```html
<div class="m-col-1-4" id="first">...</div>
<div class="m-col-1-4 m-offset-1-4" id="second">...</div>
<div class="m-col-1-4" id="third">...</div>
```

In this example the second column is offset - pushed to the right, by one quarters width, on screens larger than 656px. 

###### NOTE

Notice how all the columns widths plus the offset equal one ¼ + ¼ + ¼ + ¼ = 1, this is to ensure that the column is cleared after the last column - columns are cleared after the total widths plus offsets equals one.

#### Simple Displaced Column Example - aligned to the parents margin

You can displace (push or pull) columns to the left or right in order to let content in the parent column (eg. text) flow around the displaced column.

```html
<div class="m-center-8-10" id="main">
    <h1>...</h1>
    <p>...</p>
    <div class="m-col-3-5 m-left-0-1" id="left">
        <h2>...</h2>
        <p>...</p>
    </div>
    <p>...</p>
</div>
```

The markup `m-left-0-1` would result in a column being displaced to the left and align to the left margin of Its parent column (main)

#### Simple Displaced Column Example - pushed through the parents margin

You can also displace columns through the left or right margin of Its parent.

```html
<div class="m-center-8-10" id="main">
    <h1>...</h1>
    <p>...</p>
    <div class="m-col-3-5 m-left-1-10" id="left">
        <h2>...</h2>
        <p>...</p>
    </div>
    <p>...</p>
</div>
```
Since the main column is eight tenths wide and centered, that leaves one tenth of free space on either side. By adding the class `m-left-1-10` the displaced column is pushed through Its parents left margin by one tenth 

######NOTE

Since displaced columns are floated, but not cleared, make sure the content in Its parent column is longer than that in the displaced column. 


#### Simple Nested Example

Infinite nesting of columns is possible, just remember; the more you nest, the smaller the columns will become.

```html
<div class="m-center-9-10" id="first">
    <div class="m-col-3-4" id="second">
        <div class="m-center-12-13" id="third">
            <div class="m-col-4-8 m-offset-1-8" id="fourth">...</div>
            <div class="m-col-3-8" id="fifth">...</div>
        </div>
    </div>
    <div class="m-col-1-4" id="sixth">...</div>
</div>
```
######NOTE

In the above example the `fifth` column would only be about 20% of the total viewport wide. 

#####Auto clearing of floats
clear-floats are added automatically, independently for each viewport. They are also removed, then re-added everytime a user resizes their device.

In this example you can see how the auto-insertion of "clear-floats" allows you to create layouts that would be impossible when using standard clearfix containers.

```html
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<!-- <br style="clear:both;">-->    <!-- s -->
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<!-- <br style="clear:both;">-->    <!-- m -->
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<!-- <br style="clear:both;">-->    <!-- s and l -->
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<!-- <br style="clear:both;">-->    <!-- h -->
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<!-- <br style="clear:both;">-->    <!-- s and m -->
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<!-- <br style="clear:both;">-->    <!-- s and l -->
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<!-- <br style="clear:both;">-->    <!-- m -->
<div class="s-col-1-2 m-col-1-3 l-col-1-4 h-col-1-5"></div>
<!-- <br style="clear:both;">-->    <!-- s and h -->
```

######NOTE

The comments show where, and for what device the clear-floats are added


####Nomenclature

Class Names cheatsheet | Description
-----------------------------|------------
`prefix-col-x-y`  | A column for the chosen viewport. X number of columnns wide from a total of Y
`prefix-center-x-y` | Center the column for that viewport. X number of columnns wide from a total of Y
`prefix-offset-x-y` | Offset the column to the right by X number of columns from a total of Y
`prefix-left-x-y` | Displace a column to the left by X number of columns from a total of Y
`prefix-right-x-y` | Displace a column to the right by X number of columns from a total of Y

* choose one of the prefixes `x`, `s`, `m`, `l` or `h` for that viewport
* classes `left`, `right` and `offset` must be accompanied with a `col` class to specify width.


####version


* 0.9 - larger breakpoints now inherit smaller ones, clear-floats is now a <br> not a <div>
* 0.8 - initial release


####To-do

* Add options
* Add the ability to `hide` columns
* Optimize regex
