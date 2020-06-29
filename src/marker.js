const mapBox = require("mapbox-gl")

const domMarker = document.createElement('div');
domMarker.style.width = "32px";
domMarker.style.height = "39px";
domMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
const marker = new mapboxgl.Marker(domMarker).setLngLat([-74.009151, 40.705086]).addTo(map)

function createMarker(type, coordinates){
  let newMarker = document.createElement('div');
    newMarker.style.width = "32px";
    newMarker.style.height = "39px";
  if(type === 'activity'){
    newMarker.style.backgroundImage = "http://i.imgur.com/WbMOfMl.png";
  }
  else if(type === 'hotel'){
    newMarker.style.backgroundImage = "http://i.imgur.com/D9574Cu.png";
  }
  else{
    newMarker.style.backgroundImage = "http://i.imgur.com/cqR6pUI.png";
  }
  return new mapboxgl.Marker(newMarker).setLngLat(coordinates).addTo(map);
}

module.exports = createMarker;
