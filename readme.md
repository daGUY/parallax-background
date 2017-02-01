# Parallax Background
* By James Scariati
* June 2015

## Description
Applies a basic parallax effect to an element's background image, creating the impression that it moves at a different speed from the rest of the page while scrolling.

**[View Demo](http://scariati.kissr.com/github/parallax/)**

## Dependencies
* [jQuery](http://jquery.org/)

## Use
Include jQuery and the `jquery.parallax.js` plugin in your HTML:

```html
<script src="lib/jquery.min.js"></script>
<script src="lib/jquery.parallax.js"></script>
```

Then call `parallax()` on any elements with background images that you wish to apply the effect to:

```html
$(document).ready(function() {
	$(".bg").parallax();
});
```

## Options
The following options are available:

```html
$(".bg").parallax({
	strength: 0.2
});
```

`strength`: determines how prominent the parallax effect is, on a scale of `0` to `1`. The default is `0.2`.

## Notes

`strength: 0` is equivalent to not having a parallax effect at all, since the element's background image will move exactly in tandem with the rest of the page as the user scrolls. In this case, rather than calculate the background image's position for no reason, the plugin simply does nothing.

`strength: 1` is the opposite, meaning the element's background image won't move at all as the user scrolls. Again, rather than continually calculate the background image's position when the value would never change, the plugin just sets `background-attachment: fixed;` on the element.