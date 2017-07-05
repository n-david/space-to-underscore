$(function() {
	$('.submit').click(function(e) {
		e.preventDefault();
		var text = $('.text').val();
		text = text.replace(/( \/ )|(\.)|( #)|( )/g, '_');
		console.log(text);
		$('#result').text(text);
	});
});