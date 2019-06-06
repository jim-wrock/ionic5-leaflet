import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
map: L.Map;

ionViewDidEnter() {
  this.leafletMap();
}


 // Fonction d'initialisation du composant.
leafletMap() {
  // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  this.map = new L.Map('frugalmap').setView([50.6311634, 3.0599573], 12);
 
  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: 'edupala.com'
  }).addTo(this.map);
}
}


