import { useEffect, useState } from "react";

function App() {
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        // fetch data from the API
        const fetchData = async () => {
            const response = await fetch(
                "http://api.open-notify.org/iss-now.json"
            );
            const data = await response.json();
            setCoordinates([
                data.iss_position.latitude,
                data.iss_position.longitude,
            ]);
        };
        fetchData().catch(console.error);
    }, []);

    return (
        <div className="App bg-black text-center flex h-screen text-white">
            <div className="m-auto">
                <h1 className="text-7xl">
                    International Space Station Tracker
                </h1>
                <div className="columns-2 text-4xl">
                    <p>Lattitude: {coordinates[0]}</p>
                    <p>Longitude: {coordinates[1]}</p>
                </div>
            </div>
        </div>
    );
}

export default App;
