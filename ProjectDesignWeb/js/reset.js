$(document).ready(function(){
	if ($('#reset-password').on('click',function(){
		if ($('#username').val() == ''){
			$('#reset-warning').css('display','block');
		}
	}));
});