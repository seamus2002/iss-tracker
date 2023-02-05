import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = (props) => {
    return (
        <div className="leaflet-container">
            <MapContainer
                center={props.position}
                zoom={1}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.position}>
                    <Popup>
                        International Space Station
                        <br />
                        Lat: {props.position[0]}
                        <br />
                        Long: {props.position[1]}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
