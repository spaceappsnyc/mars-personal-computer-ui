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
            if (status == "selfie") {
                $("#default").hide();
                $("#selfie").show();
                setTimeout(reset, delay);
            } else if (status == "whereismyroverone") {
                $("#default").hide();
                $("#whereismyroverone").show();
                setTimeout(reset, delay);
            } else if (status == "direction") {
                $("#default").hide();
                $("#direction").show();
                setTimeout(reset, delay);
            } else if (status == "whereismyrovertwo") {
                $("#default").hide();
                $("#whereismyrovertwo").show();
                setTimeout(reset, delay);
            } else if (status == "whereami") {
                $("#default").hide();
                $("#whereami").show();
                setTimeout(reset, delay);
            }
            else if (status == "temperature") {
                $("#default").hide();
                $("#temperature").show();
                setTimeout(reset, delay);
            }
            else if (status == "time") {
                $("#default").hide();
                $("#time").show();
                setTimeout(reset, delay);
            }

            else if (status == "report") {
                $("#report_image").attr("src", res.data.response);
                $("#default").hide();
                $("#report").show();
                setTimeout(reset, delay);
            }

            else if (status == "hellomars") {
                $("#default").hide();
                $("#hellomars").show();
                setTimeout(reset, delay);
            }

            else if (status == "message") {
                $("#default").hide();
                $("#message").show();
                setTimeout(reset, delay);
            }

            else if (status == "map") {
                $("#default").hide();
                $("#map").show();
                setTimeout(reset, delay);
            }

            else if (status == "weather") {
                $("#default").hide();
                $("#weather").show();
                setTimeout(reset, delay);
            }
            else {
                setTimeout(update, 100);
            }
        } else {
            setTimeout(update, 100);
        }
    }).fail(function () {
        setTimeout(update, 100);
    });
};

update();




