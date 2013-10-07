$(function(){
	
	var imp = impress();
	imp.init();

	$('#arrowLeft').click(function(e){
		imp.prev();
		e.preventDefault();
	});
	
	$('#arrowRight').click(function(e){
		imp.next();
		e.preventDefault();
	});

    $(document).on('impress:stepenter', function(e){
        var currentSlide = $(e.target).attr('id');

        if (currentSlide === 'aboutAuthor1') {
            $("#universityDays").fadeIn(2000, function() {
                $("#win32Days").fadeIn(3000);
            });
        } else if (currentSlide === 'aboutAuthor2') {
            $("#levi9Days").fadeIn(2000)
        } else if (currentSlide === 'aboutAuthor3') {
            $("#hobby").fadeIn(2000, function() {
                $("#contactDetails").fadeIn(1000, function() {
                    $("#contactDetailsSpeaker").fadeIn(100);
                });
            });
        } else if (currentSlide === 'bitOfHistory') {
            $("#bitOfHistory p").fadeIn(3000);
        };
    });

});