import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useEffect, useRef } from "react";

function MapComponent() {
  // const mapRef = useRef(null);

  // useEffect(() => {
  //   if (mapRef.current) {
  //     const map = mapRef.current.leafletElement;

  //     map.setView([26.8467, 80.9462], 8, {
  //       animate: true,
  //       pan: {
  //         duration: 1.5,
  //       },
  //     });
  //   }
  // }, []);

  const markers = [
    {
      geocode: [26.4499, 80.3319],
      name: "Kanpur",
      population: 2701324,
      area: 1454,
      density: 4952.33,
    },
    {
      geocode: [26.7606, 83.3732],
      name: "Gorakhpur",
      population: 673446,
      area: 456,
      density: 4022.67,
    },
    {
      geocode: [26.8467, 80.9462],
      name: "Lucknow",
      population: 2970119,
      area: 1945,
      density: 644.333,
    },
  ];

  const customIcon = new Icon({
    iconUrl:
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [38, 38],
  });

  return (
    <MapContainer center={[26.8467, 80.9462]} zoom={6}>
      {/* <TileLayer
        attribution="stadia alidade"
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      /> */}

      {/* <TileLayer
        attribution="stamen wtercolor"
        url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
      /> */}
      <TileLayer
        attribution="stamen wtercolor"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.jpg"
      />

      <MarkerClusterGroup>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Tooltip direction="top" offset={[0, -38]} opacity={0.8}>
              <div className="tooltip-content">
                <h3>{marker.name}</h3>
                <p>Population: {marker.population}</p>
                <p>Area: {marker.area} sq mi</p>
                <p>Density: {marker.density} per sq mi</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default MapComponent;
