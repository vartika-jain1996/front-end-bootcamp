import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-contact-and-map',
  templateUrl: './contact-and-map.component.html',
  styleUrls: ['./contact-and-map.component.css']
})
export class ContactAndMapComponent implements OnInit {
  
   public ngOnInit(): void { 
      const map = new mapboxgl.Map({
      accessToken:'pk.eyJ1IjoidmFydGlrYWphaW4iLCJhIjoiY2t5bHlhZTU5Mmc3bTJvcXBqcnpwYW8yaiJ9.ORDu0BGAeZtzV7qqTezjUg',
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.060982, 42.35725],
      zoom: 18
      });   
      }
}
