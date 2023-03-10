import { useEffect, useState } from "react";
import "./App.css";
import Map from "./Map";
import ParticlesBackground from "./ParticlesBackground";

function App() {
    const [position, setPosition] = useState([0, 0, 0]);

    useEffect(() => {
        // fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.wheretheiss.at/v1/satellites/25544"
                );
                const data = await response.json();
                setPosition([data.latitude, data.longitude, data.altitude]);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const date = new Date();

    return (
        <div className="App bg-black text-center flex h-screen">
            <ParticlesBackground className="-z-10" />
            <div className="m-auto text-white z-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl py-20">
                    International Space Station Tracker
                </h1>

                <div className=" xl:columns-2">
                    <div className="text-left text-xl md:text-2xl pb-20 pl-5 ">
                        <p>Date: {date.toLocaleDateString()}</p>
                        <p>Time: {date.toLocaleTimeString()}</p>
                        <p>Lattitude: {position[0]}</p>
                        <p>Longitude: {position[1]}</p>
                        <p>Altitude: {position[2]} km</p>
                    </div>
                    <div>
                        <Map position={position} />
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

export default App;
