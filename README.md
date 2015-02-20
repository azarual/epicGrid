##epicGrid

####Features 
* no dependencies - written in pure javascript
* lightweight - 1.4kb when minified and gzipped, only 2.5kb before
* responsive - built for mobiles, tablets and desktops - reacts to resize events
* no clearfix containers! - automagically calculates where to clear floats

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


####To-do

* Add options
* Add the ability to `hide` columns
* Optimize regex
