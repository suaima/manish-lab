import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import config from "../config";
import Sidebar from "./Sidebar";

function MainSearchList() {
  mapboxgl.accessToken = config.mapToken;

  const mapContainer = useRef(null);
  let mapRef = React.useRef();
  let ametiesRef = React.useRef();
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [amenitiesData, setAmenitiesData] = useState(null);
  const [metersPerPixel, setMetersPerPixel] = useState();
  const layes = [
    {
      label: "Hybrid",
      value: "s_h",
      id: "hybrid_map",
    },
    {
      label: "Streets",
      value: "m",
      id: "Streets_map",
    },
    {
      label: "Satellite",
      value: "s",
      id: "Satellite_map",
    },
  ];
  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [lng, lat],
      // zoom: zoom,
    });

    map.current.addControl(new mapboxgl.ScaleControl());

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
console.log("Hello");
  }, [amenitiesData]);

  const handleChangeMapStyle = (layer) => {
    const mapStyle = {
      m: "streets-v10",
      s_h: "satellite-streets-v10",
      s: "satellite-v9",
    };
    map.current.setStyle("mapbox://styles/mapbox/" + mapStyle[layer.value]);
  };

  return (
    <>
      <Sidebar
        amenitiesData={amenitiesData}
        setAmenitiesData={setAmenitiesData}
      />
      <div>
        <div className="map-style-tab">
          <Tabs tabs={layes} onChange={handleChangeMapStyle}></Tabs>
        </div>

        <div
          ref={mapContainer}
          className="map-container"
          style={{ height: "500px", position: "relative" }}
        />
      </div>
    </>
  );
}

const Tabs = ({ tabs, onChange }) => {
  return (
    <div className="tabs">
      {tabs.map((tab, _index) => (
        <div key={tab.id} className={tab.id + ` tab tab--${_index}`}>
          <input
            id={tab.id}
            type="radio"
            name="tabs"
            onChange={(e) => {
              onChange(tab);
            }}
            value={tab.value}
          />
          <label htmlFor={tab.id}>{tab.label}</label>
        </div>
      ))}
    </div>
  );
};

export default MainSearchList;
