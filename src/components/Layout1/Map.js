import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixing the default marker icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
const ResetButton = ({ resetView }) => {
    return (
        <button
            className="bg-blue-500 text-white py-2 px-4 rounded-full absolute top-4 right-4 shadow-md"
            onClick={resetView}
        >
            Reset View
        </button>
    );
};
const Map = () => {
    const initialPosition = [23.1765, 75.7885];

    const mapRef = useRef();

    const resetView = () => {
        const map = mapRef.current;
        if (map) {
            map.setView(initialPosition, 12);
        }
    };
    return (
        <div className="mt-8 mb-10 px-10 flex justify-center">
            <MapContainer className="h-96 w-full" center={[23.1765, 75.7885]} zoom={10} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />
                <Marker position={[23.1765, 75.7885]}>
                    <Popup>
                        My Current Location: Ujjain, MP, India
                    </Popup>
                </Marker>
                <ResetButton resetView={resetView} />
            </MapContainer>
        </div>
    );
};

export default Map;
