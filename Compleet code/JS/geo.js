window.addEventListener('load', init);


function init(){
    getLocation();
    console.log('geoloc...js');
   // console.log('init');
}

function getLocation() {
    //console.log('getlocation');
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
           //console.log('niet mogelijk om de locatie nog een keer te zien');
        }
}

function showPosition(position) {
    //console.log('showposition');
    var Latitude = position.coords.latitude;
    var longitude= position.coords.longitude;

    console.log("Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude);


    //latitude later bepalen wat er mee moet gebeuren.
    if(Latitude < 51.91722 && Latitude >= 51.917155  && longitude >  4.483920 && longitude < 4.484995){
        console.log('in vak 1');
            $.ajax({
                url: "writeInFile/file1.php"
            }).success(getLocation());
    }else if(Latitude < 51.917308 && Latitude >= 51.917222  && longitude > 4.483920 && longitude < 4.484995){
        console.log('in vak 2');
        //opnieuw();
            $.ajax({
                url: "writeInFile/file2.php"
            }).success(getLocation());
    }else if(Latitude < 51.917393 && Latitude >= 51.917308  && longitude > 4.483920 && longitude < 4.484995){
        console.log('in vak 3');
        //opnieuw();
            $.ajax({
                url: "writeInFile/file3.php"
            }).success(getLocation());
    }
    else{
        console.log('er is geen vak');
            $.ajax({
                url: "writeInFile/file4.php"
            }).success(getLocation());
        //opnieuw();
    }
}
