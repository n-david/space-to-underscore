$(function() {
	$('.submit').click(function(e) {
		e.preventDefault();
		var text = $('.text').val();
		text = text.replace(/( [^a-zA-Z0-9-] )|( [^a-zA-Z0-9-])|([^a-zA-Z0-9-] )/g, '_').replace(/[^a-zA-Z0-9-]/g,'_');
		console.log(text);
		$('#result').text(text);
	});
});