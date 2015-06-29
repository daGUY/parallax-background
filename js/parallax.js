$(document).ready(function() {
	parallax();
	
	function parallax() {
		var scroll = $(document).scrollTop(),
			offset = $(".parallax").offset().top,
			parallax = Math.floor((scroll - offset) * 0.2);
		
		$(".parallax").css({
			backgroundPosition: "center " + parallax + "px"
		});
	}
	
	$(document).bind("scroll", function() { parallax(); });
});