var callback = function(){
	$('.custom-progress').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	// $('.icons-red').each(function(){
	// 	height = $(this).height();
 //    $(this).animate({
 //        height: 14,
 //    }, 2000);
	// });
};
$(document).ready(callback);
