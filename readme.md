# Parallax Background
* By James Scariati
* June 2015

## Description
Applies a basic parallax effect to an element, creating the impression that the element moves at a different speed from the rest of the page while scrolling.

## Dependencies
* [jQuery](http://jquery.org/)

## Use
To use the parallax effect on an element, simply add the `.parallax` class to any element that has a background image:

```html
<div class="chaz parallax"></div>
``` 

## Options
You can adjust how prominent the parallax effect is by changing the multiple used to calculate the background image position. Values closer to `1` make the effect stronger, while values closer to `0` make it weaker. The default value is `0.2`.

```javascript
parallax = Math.floor((scroll - offset) * 0.2);
```

