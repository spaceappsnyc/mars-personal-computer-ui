// print local and mars time
var currentdate = new Date();
var datetime = currentdategetHours() + ":" + currentdategetMinutes() + ":" + currentdategetSeconds();
var marsdatetime = (currentdategetHours() + 5) + ":" + currentdategetMinutes() + ":" + currentdategetSeconds();

$("#local-time").text("Local Time: " + new Date());
$("#mars-time").text("Mars Time: 01:33, Sol 28 ");


//print mars image from NASA
$ajax({
    url: "https://apinasagov/mars-photos/api/v1/rovers/curiosity/photos?sol=398&api_key=dazZywWfQsUQLpksbJtmdrnBH7Khif4rWSf6qgJI",
    dataType: "json",
    success: function (data) {
        photo = dataphotos[2];
        img = photoimg_src;
        $("#map").attr("src", img);
    }
});


// $get('http://spaceappshackathoneu-gbmybluemixnet/indexphp?q=status', function(mars){
// 	consolelog(mars);
// });

var reset = function () {
    $("js-panel").hide();
    $("#default").show();
    update();
};

// hide all panels by default
$(".js-panel").hide();
$("#default").show();

var update = function () {
    consolelog("updating ui");
    $get('http://spaceappshackathoneu-gbmybluemixnet/indexphp?q=status', function (response) {
        if (responsedata) {
            var status = responsedatacommand;

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

            consolelog("status: " + status);

            if (status == "selfie") {
                $("#default").hide();
                $("#selfie").show();
                setTimeout(reset, 5000);
            } else if (status == "whereismyroverone") {
                $("#default").hide();
                $("#whereismyroverone").show();
                setTimeout(reset, 5000);
            } else if (status == "direction") {
                $("#default").hide();
                $("#direction").show();
                setTimeout(reset, 5000);
            } else if (status == "whereismyrovertwo") {
                $("#default").hide();
                $("#whereismyrovertwo").show();
                setTimeout(reset, 5000);
            } else if (status == "whereami") {
                $("#default").hide();
                $("#whereami").show();
                setTimeout(reset, 5000);
            }
            else if (status == "temperature") {
                $("#default").hide();
                $("#temperature").show();
                setTimeout(reset, 5000);
            }
            else if (status == "time") {
                $("#default").hide();
                $("#time").show();
                setTimeout(reset, 5000);
            }

            else if (status == "report") {
                $("#default").hide();
                $("#report").show();
                setTimeout(reset, 5000);
            }

            else if (status == "hellomars") {
                $("#default").hide();
                $("#hellomars").show();
                setTimeout(reset, 5000);
            }

            else if (status == "message") {
                $("#default").hide();
                $("#message").show();
                setTimeout(reset, 5000);
            }

            else if (status == "map") {
                $("#default").hide();
                $("#map").show();
                setTimeout(reset, 5000);
            }

            else if (status == "weather") {
                $("#default").hide();
                $("#weather").show();
                setTimeout(reset, 5000);
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




