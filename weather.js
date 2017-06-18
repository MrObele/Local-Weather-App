$(document).ready(function(){
  var lat;
  var long;
  var feTemp;
  var celTemp;
  var  windSpeed;
  //get current location data witH ip API
     $.getJSON("http://ip-api.com/json",function(data1){
    var lat = data1.lat;
     var long = data1.lon;
    //JSON call for the open weather api data
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=c72716410f79adafec3c0681b2ad3ab2',function(data){
    var icon= "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
   
   var kelvn =    data.main.temp;
   var myWeather = data.weather[0].description;
    var windSpeed = data.wind.speed;
    var  cityName = data.name;
    //convert windspeed from m/s to mph
    var windSpeed = (2.237*(windSpeed)).toFixed(1)+" mph";
    //temperature conversion
    feTemp = (Math.floor((kelvn)*(9/5)-459.67));
    celTemp = (Math.floor(kelvn-273));
    document.getElementById("myImage").src = icon;
    $("#city").text(cityName);
    $("#description").text(myWeather);
    $("#windSpeed").text(windSpeed);
    
    //switching between  fahrenheit and celsius
     $("#weather").html(feTemp+" &#8457;");
     var unitCheck = false;
    $("#unitButton").on("click",function(){
      if(unitCheck ==false){
        $("#weather").html(celTemp +"&#8451;");
        unitCheck = true;
      }
      else{
        $("#weather").html(feTemp+"&#8457;");
        unitCheck = false;
      }
    });
             //array of images for specific weathers
    var imgs = ['url("https://i.imgur.com/eI5KLUW.jpg")', 'url("https://i.imgur.com/rG0P1ro.jpg")', 'url("https://i.imgur.com/voCuONs.jpg")', 'url("https://i.imgur.com/5tFHSKa.jpg")'];
    var imageArray = ["url(http://www.testimoniesofhope.com/wp-content/uploads/2013/06/Summer-Nature-Backgrounds.jpg)","url(http://www.testimoniesofhope.com/wp-content/uploads/2013/06/Summer-Nature-Backgrounds.jpg)", "url(http://healthiculture.com/fibromyalgia/newsletter/weatherfibro/weather1.jpg)","url(http://blogs.channel4.com/liam-dutton-on-weather/wp-content/uploads/sites/27/2013/02/frost_tree_g_wp.jpg)","url(https://shawglobalnews.files.wordpress.com/2016/02/mdb105323249_high1.jpg?quality=70&strip=all&w=650&h=424&crop=1)","url(http://previews.123rf.com/images/jakkapanprammanasik/jakkapanprammanasik1503/jakkapanprammanasik150300657/38102914-The-cold-weather-season-in-Japan--Stock-Photo.jpg)"];

    if(celTemp > 50){
      $("body").css("background-image",imageArray[0]);
    }
    else if(celTemp > 30){
      $("body").css("background-image",imageArray[1]);
    }
     else if(celTemp > 20){
      $("body").css("background-image",imageArray[2]);
    }
 
     else if(celTemp > 15){
      $("body").css("background-image",imageArray[3]);
    }
     else if(celTemp > 10){
      $("body").css("background-image",imageArray[5]);
    }
    else if(celTemp > 0){
      $("body").css("background-image",imageArray[6]);
    }
    
      });
    });
});