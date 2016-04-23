	

	// print local and mars time
		var currentdate = new Date();
	    var datetime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
	    var marsdatetime = (currentdate.getHours() + 5) + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

		$( "#local-time" ).text("Local Time: " + datetime);
		$( "#mars-time" ).text("Mars Time: " + marsdatetime);



	//print mars image from NASA
		$.ajax({
		    url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=398&api_key=dazZywWfQsUQLpksbJtmdrnBH7Khif4rWSf6qgJI",
		    dataType: "json",
		    success: function( data ) {
		        photo = data.photos[2];
		    	img = photo.img_src;
		    	$("#map").attr("src",img);
		    }
		});





	// $.get('http://spaceappshackathon.eu-gb.mybluemix.net/index.php?q=status', function(mars){
	// 	console.log(mars);
	// });

	var reset = function() {
		$(".js-panel").hide();
		$("#default").show();
		update();
	}
	
	// hide all panels by default
	$(".js-panel").hide();





	var update = function(){ 
		$.ajax({
		    url: 'http://spaceappshackathon.eu-gb.mybluemix.net/index.php?q=status',
		    dataType: 'JSON',
		    // jsonpCallback: 'callback',
		    type: 'GET',
		    success: function (mars) {
		       
		       //print the returned data in console
		       console.log(mars);

		       //set status and print it on console
		       status = mars.data.command;
			   console.log("status: " + status);



			   // show containers based on status
				if(status == "selfie"){
					$( "#default" ).hide();
					$( "#selfie" ).show();
					setTimeout(reset, 5000);
				} 

				else if (status == "time"){
					$( "#default" ).hide();
					$( "#time" ).show();
					setTimeout(reset, 5000);
				} 

				else if (status == "message"){
					$( "#default" ).hide();
					$( "#message" ).show();
					setTimeout(reset, 5000);
				} 

				else if (status == "map"){
					$( "#default" ).hide();
					$( "#map" ).show();
					setTimeout(reset, 5000);
				} 

				else if (status == "conditions"){
					$( "#default" ).hide();
					$( "#conditions" ).show();
					setTimeout(reset, 5000);
				} 
				else{
					//wait and try again
					setTimeout(update, 1000);
				}

		    }
		});
	}

	setTimeout(update, 10000);




