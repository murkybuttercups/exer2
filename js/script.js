window.onload = function() {
    init();
};

// function to display story content, for the life of me I could not get it to go back to the preview state on the second click oops!
function init() {

	// console.log("hey");
	$(".story--box").click(function(){
		$(".story--preview").hide();
		$(".story__hide").show();
		$(".story--box").css("height","350px");
		$(".story--box").css("width","350px");
	});
	// $(".story--content").click(function(){
	// 	$(".story--preview").show();
	// 	$(".story__hide").hide();
	// 	$(".story--box").css("height","220px");
	// 	$(".story--box").css("width","220px");
	// });
};