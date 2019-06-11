import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{
map: L.Map;
marker: any;
lati: any;
lngi: any;
heading: any;

constructor() {
  console.log('Constructor initialised');
  this.lati = 0;
  this.lngi = 0;
  this.heading = 0;
}


ionViewWillEnter() {
  this.leafletMap();


}

print() {
  console.log('this.lati print : ', this.lati);
}


ionViewDidEnter() {
  // this.placeLocMarker();
}


leafletMap() {
  this.map = new L.Map('mymap');

  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: ''
  }).addTo(this.map);
  this.map.locate({
    setView: true,
    maxZoom: 10,
  }).on('locationfound', this.onLocationFound, this);
}

onLocationFound(e) {
  console.log(e);
  this.lati = e.latlng.lat;
  this.lngi = e.latlng.lng;
  this.heading = e.heading;
  // console.log('heading : ' + e.heading);
  // console.log('this.lati: ' + this.lati);
  // console.log('this.lngi: ' + this.lngi);

  const myIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });

  console.log('this.lati onloc: ' + this.lati);
  console.log('this.lngi onloc: ' + this.lngi);

  L.marker([this.lati, this.lngi], {icon: myIcon}).bindPopup('Vous êtes ici!').addTo(this.map).openPopup();
}

  // Marker src https://github.com/pointhi/leaflet-color-markers


ngOnInit() {
  console.log('ngOnInit fired');
  console.log('this.lati ngOnInit: ' + this.lati);
  console.log('this.lngi ngOnInit: ' + this.lngi);
}

ionViewWillLeave() {
  this.map.remove();
}


}


