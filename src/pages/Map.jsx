// TODO: Restrict API key

import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

export default function Home() {
  

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  
  if (!isLoaded) return <div>Loading...</div>;
  return <Map/ >;
}


function Map() {
  const [activeMarker, setActiveMarker] = useState(false);
  useEffect(() => {
    setActiveMarker((prev) => true)
    })
  return <GoogleMap zoom={10} center={{lat: 44, lng: -80}} ><div className="h-screen">{activeMarker && (<Marker position={{lat:44, lng: -80}}/>)}</div></GoogleMap>
}
