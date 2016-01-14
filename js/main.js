$(function() {

	$(".phone-call__btn").on("click", function (e) {
		e.preventDefault();
		$(".modal--calling").fadeIn();
	});

$(".modal-close").on("click", function () {
		$(".modal--calling").fadeOut();
		$(".modal--calling-success").fadeOut();
	});
});