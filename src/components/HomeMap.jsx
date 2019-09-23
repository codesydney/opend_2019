import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

export default class HomeMap extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     lat: -33.8688,
     lng: 151.2093,
     zoom: 16
   };
 }

 render() {
   const position = [this.state.lat, this.state.lng];
   return (
     <Map center={position} zoom={this.state.zoom}>
       <TileLayer
         attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       <Marker position={[this.state.lat, this.state.lng]} />

     </Map>
   );
 }
}