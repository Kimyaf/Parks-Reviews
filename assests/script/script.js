mapboxgl.accessToken =
    'pk.eyJ1IjoicmljaHRvdGhlcmVzY3VlIiwiYSI6ImNrYTAzMTdiejBsYTczZXBvd3ZodTE3bGQifQ.M2ZreZbu-Q5OpJaEFw_r5w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
});

mapboxgl.accessToken = 'pk.eyJ1IjoicmljaHRvdGhlcmVzY3VlIiwiYSI6ImNrYTAzMTdiejBsYTczZXBvd3ZodTE3bGQifQ.M2ZreZbu-Q5OpJaEFw_r5w';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // starting position
    zoom: 9 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);



