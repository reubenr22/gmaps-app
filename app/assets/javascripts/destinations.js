

$(document).ready(function (){
    function initialize() {
      
      let myCoords = new google.maps.LatLng(latitude, longitude);
      
      let mapOptions = {
        zoom: 12,
        center: myCoords,
        scrollwheel: false
      }

      let map = new google.maps.Map(document.getElementById('destination-map'),
                mapOptions);

        
        let marker = new google.maps.Marker({
          position: myCoords,
          map: map,
          title:address
        });
        
        let contentString = '<h2>' + address + '</h2>';

     let infowindow = new google.maps.InfoWindow({
     content: contentString
      });
      google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});