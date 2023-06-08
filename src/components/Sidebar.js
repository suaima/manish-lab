import axios from "axios";
import React, { useRef, useEffect, useState } from "react";

function Sidebar(props) {
  const [selectedItems, setSelectedItems] = React.useState(["Villas"]); // TODO: NEED TO REMOVE THIS LINE
  const [show, setShow] = React.useState();
  const setAmenitiesData = props.setAmenitiesData;
  const amenitiesData = props.amenitiesData;

  const rsp = axios.create({
    baseURL: `http://solm.ddev.site/api/v2`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const [amenities, setAmenities] = React.useState([]);
  React.useEffect(() => {
    rsp.get("/aminities/category").then((response) => {
      setAmenities(response.data);
    });
  }, []);

  const handleItemClick = (item, itemValue) => {
    if (amenitiesData) {
      const exists = amenitiesData.some(
        (element) => element.value === item.value
      );
      if (exists) {
        const filteredArray = amenitiesData.filter(
          (element) => element.value !== item.value
        );
        setAmenitiesData(filteredArray);
      } else if (item.pin_visible_on_map == "1") {
        setAmenitiesData([...amenitiesData, item]);
      }
    } else if (item.pin_visible_on_map == "1") {
      setAmenitiesData([item]);
    }
  };

  return (
    <>
      <button className="mob-filter-toggle" onClick={() => setShow(!show)}>
        Find
      </button>
      <div className={show ? "listingMap active" : "listingMap"}>
        <ul style={{ listStyleType: "none" }}>
          {amenities && amenities.length > 0 ? (
            amenities.map((element, index) => {
              return (
                <li key={index}>
                  <a
                    className={
                      amenitiesData &&
                      amenitiesData.some((item) => item.value === element.value)
                        ? "active"
                        : ""
                    }
                    onClick={() => handleItemClick(element, element.value)}
                    href=""
                    style={{ backgroundColor: element.background_color }}
                  >
                    <span>
                      <img src={element.icon} />
                    </span>
                    <span>{element.name}</span>
                  </a>
                </li>
              );
            })
          ) : (
            <li>
              <a className="active" href="">
                <span>
                  <img
                    src={
                      window.location.origin +
                      "/sites/default/files/villas_icon.png"
                    }
                  />
                </span>
                <span>Villas</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
