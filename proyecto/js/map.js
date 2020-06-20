//crear el marcador en las mismas coordenadas
var map = L.map('mapid').setView([-0.2247332, -78.5179488], 12);

var latlngs = [
    [-0.2247332, -78.5179488],
    [-0.316082, -78.534104]
];
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//ponemos el marcador del yavirak
L.marker([-0.105906, -78.479149]).addTo(map)
    .bindPopup('Vertmodel ecuador reciclaje de residuos')
    .openPopup();
    //ponemos un marcador en mi casa.
    
    ///
    L.marker([-0.112032,-78.476370]).addTo(map)
    .bindPopup('Recicladora de Metales RECICLAMETAL')
    .openPopup();
    ///////////////////7
    L.marker([-0.111689,-78.478902]).addTo(map)
    .bindPopup('AB Reciclajes   ')
    .openPopup();
    ////
    L.marker([-0.117718,-78.476574]).addTo(map)
    .bindPopup('GRAHAM RECICLAJE')
    .openPopup();
    /////////////////////7
    L.marker([-0.111689,-78.478902]).addTo(map)
    .bindPopup('')
    .openPopup();
    ////////////////
    L.marker([-0.166570,-78.473004]).addTo(map)
    .bindPopup('YO RECICLO ')
    .openPopup();
    //////////////
    L.marker([-0.103009,-78.448132]).addTo(map)
    .bindPopup('Eco Reciclaje QUITO  ')
    .openPopup();
    L.marker([-0.097515,-78.472164]).addTo(map)
    .bindPopup('Rrciclar Cia. Ltda')
    .openPopup();
L.circle([-0.316082, -78.534104], {
    }).addTo(map)
    
    
  

   