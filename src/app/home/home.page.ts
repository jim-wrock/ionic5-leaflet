import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
map: L.Map;
marker: any;

ionViewDidEnter() {
  this.leafletMap();

}

OnInit() {
}

 // Fonction d'initialisation du composant.
leafletMap() {
  // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.



  this.map = new L.Map('frugalmap')

  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: ''
  }).addTo(this.map);

  this.map.locate({
    setView: true,
    maxZoom: 10
  })

    // setview
    // .setView([50.6311634, 3.0599573], 12);

    // .on('locationfound', (e) => {
    //   console.log('found you');
    //   })


  // Marker src https://github.com/pointhi/leaflet-color-markers
  const myIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
    });
  L.marker([43.4833588, -1.5005794], {icon: myIcon}).bindPopup('You are here').addTo(this.map).openPopup();
}
}


