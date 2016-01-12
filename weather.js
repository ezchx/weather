$(document).ready(function() {
  
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      //lat = 33.748995;
      var long = position.coords.longitude;
      //long = -84.387982;
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=1f751b1a0b95af529c81a98bbcd0ec8d";
      //$("#debug").html("latitude: " + lat + "<br>longitude: " + long);
      
      $.getJSON(url, function(json) {
        
        var ike = json.weather[0].icon;
        icon = "http://openweathermap.org/img/w/" + ike + ".png";
        var html = "<img src = " + icon + " height='60'>";
        $("#icon").html(html);
        //$("#debug").html(ike);
        if (ike === "01d" || ike === "01n") {document.body.style.backgroundImage="url('https://solodialogue.files.wordpress.com/2011/02/bright-blue-sky-with-a-few-tiny-white-clouds.jpg')";};
        if (ike === "02d" || ike === "02n" || ike === "03d" || ike === "03n" || ike === "04d" || ike === "04n") {document.body.style.backgroundImage="url('http://www.crexmeadows.org/Buttons/BW3rd-Curious-Cloudy-Day.jpg')";};
        if (ike === "09d" || ike === "09n" || ike === "10d" || ike === "10n" || ike === "11d" || ike === "11n") {document.body.style.backgroundImage="url('http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Wallpaper.jpg')";};
        if (ike === "13d" || ike === "13n") {document.body.style.backgroundImage="url('http://img.xcitefun.net/users/2014/07/361065,xcitefun-snowing-nature-4.jpg')";};
        if (ike === "50d" || ike === "50n") {document.body.style.backgroundImage="url('http://cdn9.staztic.com/app/a/2559/2559360/foggy-weather-wallpaper-2-7-s-307x512.jpg')";};
        
        var temp = json.main.temp;
        tempy = Math.round(temp * 9 / 5 -459.67) + " F";
        tempy2 = Math.round(temp  - 273.15) + " C";
        $("#tempy").html(tempy);
        $("#tempy2").html(tempy2);
        $("#tempy2").hide();
        
        $("#units").on("click", function(){
          if ($("#tempy").is(':visible')) {
            $("#tempy").hide();
            $("#tempy2").show();
          } else {
            $("#tempy").show();
            $("#tempy2").hide();
          }
        });
        
        
        var location = json.name;
        $("#loc").html(location);
        
        var description = json.weather[0].main;
        $("#desc").html(description);
      
        var wd = json.wind.deg;
        if (wd >= 342 || wd <= 23) {compass = "N";}
        if (wd >= 24 & wd <= 69) {compass = "NE";}
        if (wd >= 70 & wd <= 116) {compass = "E";}
        if (wd >= 117 & wd <= 163) {compass = "SE";}
        if (wd >= 164 & wd <= 209) {compass = "S";}
        if (wd >= 210 & wd <= 256) {compass = "SW";}
        if (wd >= 257 & wd <= 303) {compass = "W";}
        if (wd >= 304 & wd <= 349) {compass = "NW";}
      
        var wind = "Wind " + compass + " " + Math.round(json.wind.speed) + " knots";
        $("#whoosh").html(wind);
        
      });

    });
      
  }
   
});