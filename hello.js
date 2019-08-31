$(document).ready(function() {
	
    $.ajax({
        url: "https://trabalho-pos-agenda.herokuapp.com/contato/id/1"
    }).then(function(data) {
		
        $('.id').append(data.id);
		$('.nome').append(data.nome);
		$('.endereco').append(data.endereco);
		
		console.log(data);
    });
	
	$.getJSON("https://trabalho-pos-agenda.herokuapp.com/contato/id/1",
		function(data) {
		alert(data.nome);         
	});
	
   
});