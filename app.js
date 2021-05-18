$(document).ready(function () {

	$.ajax({
		url: "https://www.omdbapi.com/?s=matrix&apikey=2c90c812"
	}).then(function (data) {
		console.log(data.Search[0]);
		$('.title').append(data.Search[0].Title);
		$('.year').append(data.Search[0].Year);
		$('.poster').append(data.Search[0].Poster);
		$("#poster").attr("src", data.Search[0].Poster);
		console.log(data);
	});

});