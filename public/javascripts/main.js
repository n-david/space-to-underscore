$(function() {

	function copyToClipboard(element) {
		var $temp = $('<input>');
		$('body').append($temp);
		$temp.val($(element).text()).select();
		document.execCommand('copy');
		$temp.remove();
	}

	$('.submit').click(function(e) {
		e.preventDefault();
		var text = $('.text').val();
		text = text.replace(/( [^a-zA-Z0-9-] )|( [^a-zA-Z0-9-])|([^a-zA-Z0-9-] )/g,
				'_').replace(/[^a-zA-Z0-9-]/g, '_');
		$('#result').text(text);
		$('.copy').addClass('display');
	});

	$('.copy').click(function(e) {
		e.preventDefault();
		copyToClipboard($('#result'));
	});
});