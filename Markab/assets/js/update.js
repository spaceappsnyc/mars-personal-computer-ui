$("#local-time").text("Local Time: " + new Date());
$("#mars-time").text("Mars Time: 01:33, Sol 28 ");


//print mars image from NASA
$.ajax({
    url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=398&api_key=dazZywWfQsUQLpksbJtmdrnBH7Khif4rWSf6qgJI",
    dataType: "json",
    success: function (data) {
        photo = data.photos[2];
        img = photo.img_src;
        $("#map").attr("src", img);
    }
});


// $get('http://spaceappshackathoneu-gbmybluemixnet/indexphp?q=status', function(mars){
// 	consolelog(mars);
// });

var reset = function () {
    $(".js-panel").hide();
    // $("#default").show();
    update();
};


var show_hide_panels = function (data) {
	var status = data.command;
    if (status == "selfie") {
        $(".js-panel").hide();
        $("#selfie").show();
    } else if (status == "whereismyroverone") {
        $(".js-panel").hide();
        $("#whereismyroverone").show();
    } else if (status == "direction") {
        $(".js-panel").hide();
        $("#direction").show();
    } else if (status == "whereismyrovertwo") {
        $(".js-panel").hide();
        $("#whereismyrovertwo").show();
    } else if (status == "whereami") {
        $(".js-panel").hide();
        $("#whereami").show();
    } else if (status == "temperature") {
        $(".js-panel").hide();
        $("#temperature").show();
    } else if (status == "time") {
        $(".js-panel").hide();
        $("#time").show();
    } else if (status == "report") {
        $("#report_image").attr("src", data.response);
        $(".js-panel").hide();
        $("#report").show();
    } else if (status == "hellomars") {
        $(".js-panel").hide();
        $("#hellomars").show();
    } else if (status == "message") {
        $(".js-panel").hide();
        $("#message").show();
    } else if (status == "map") {
        $(".js-panel").hide();
        $("#map").show();
    } else if (status == "weather") {
        $(".js-panel").hide();
        $("#weather").show();
    }
};


// hide all panels by default
$(".js-panel").hide();
$("#default").show();

var update = function () {
    console.log("updating ui");
    $.get('http://spaceappshackathon.eu-gb.mybluemix.net/index.php?q=status', function (res) {
        if (res.data) {
            var status = res.data.command;


            /**
             * 
             *
             * selfie
             * whereismyroverone
             * whereismyrovertwo
             * whereami
             * direction
             * temperature
             * time
             * report
             * hellomars
             * message
             * map
             * weather
             */

            // show containers based on status

            console.log("status: " + status);

            var delay = 5000;
			show_hide_panels(res.data);
        }

        setTimeout(update, 1000);

    }).fail(function () {
        setTimeout(update, 1000);
    });
};

update();




// sidebar interactions
$( ".nav" ).click(function() {
	$(".nav").removeClass("selected");
	$(this).addClass("selected");
	var status = $(this).attr('name');
	console.log("sidebar interactions");
	console.log("status" + status);
	show_hide_panels({command: status, response:"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00179/opgs/edr/ncam/NLA_413379197EDR_S0060000NCAM00542M_.JPG"});

});


