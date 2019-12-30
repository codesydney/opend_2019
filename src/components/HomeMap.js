import React from "react";
import {useContext} from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { MyContext } from "../App";

export default function HomeMap() {
  const { address, updateAddress } = useContext(MyContext);
  let zoom = 16
 
 return(
     <Map center={[address.attributes.Latitude, address.attributes.Longitude]} zoom={zoom}>
       <TileLayer
         attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       <Marker position={[address.attributes.Latitude, address.attributes.Longitude]} />

     </Map>
   );
}