window.onload = function(){
	
	$.ajax({
	type: "GET",
	url: "data/tweets.json",
	success: function(data){
		console.log(data);
		
	$.ajax({
	type: "GET",
	url: "data/friends.json",
	success: function(data){
		console.log(data);
		
	$.ajax({
	type: "GET",
	url: "data/videos.json",
	success: function(data){
		console.log(data);
		
	},
	error: function(jqXHR, textStatus, error){
		console.log(error);
	}
	});
	},
	error: function(jqXHR, textStatus, error){
		console.log(error);
	}
	});
	},
	error: function(jqXHR, textStatus, error){
		console.log(error);
	}
	});
	
};






// window.onload = function(){
	
// 	var http = new XMLHttpRequest();
	
// 	http.onreadystatechange = function() {
// 		if(http.readyState == 4 && http.status == 200){
// 			// console.log(JSON.parse(http.response));
// 		}
// 	};
	
// 	http.open("GET", "data/tweets.json", true);
// 	http.send();

// 	//jquery method
	
// 	$.get("data/tweets.json", function(data){
// 	console.log(data);	
// 	});
// 	console.log("test")
// };

// // Ready States

// // 0- request not initialized
// // 1- request has been set up
// // 2- request has been sent
// // 3- request is in process
// // 4- request is complete