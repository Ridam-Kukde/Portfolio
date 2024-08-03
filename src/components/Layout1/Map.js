import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useTheme } from '@mui/material/styles';
import './map.css'; // Import the CSS file

// Fixing the default marker icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = () => {
  const theme = useTheme();
  const mapStyle = {
    backgroundColor: theme.palette.mode === 'dark' ? '#2c2c2c' : '#ffffff',
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <MapContainer
        center={[23.1765, 75.7885]}
        zoom={10}
        className="map-container"
        style={mapStyle}
      >
        <TileLayer
          url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        />
        <Marker position={[23.1765, 75.7885]}>
          <Popup>
            My Current Location: Ujjain, MP, India
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;