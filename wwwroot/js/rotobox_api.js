var API_ROOT = "/api";
var API_URI_LOCATION =  "/location";
var API_URI_SATELLITES = "/satellites";
var API_AIRPORT_SEARCH = "/airports/search";

function rotobox_api(uri, args, callback) {
    var fullURL = API_ROOT + uri;

    if (args != {}) {
        argNames = Object.keys(args);
        for (var i = 0; i < argNames.length; i++) {
            if (i == 1) {
                fullURL += "?";
            } else {
                fullURL += "&";
            }
            name = argNames[i];
            value = args[name];
            fullURL += name + "=" + value;
        }
    }

    $.ajax({url: fullURL, dataType: "json"})
    .done(function(data) {
        if (callback != undefined) {
            callback(data);
        }
    }).fail(function(){
        console.log("ERROR: Failed fetching " + uri);
    })
}

