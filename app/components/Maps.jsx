"use client"
import React, { useState, useMemo } from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import DrHornImage from '@/public/images/about-us/Neal.webp';
import { Navigation } from 'lucide-react';

const Maps = () => {
  const [viewState, setViewState] = useState({
    latitude: 32.7304,
    longitude: -97.3334,
    zoom: 15
  });

  const [showPopup, setShowPopup] = useState(true);

  const mapboxToken = useMemo(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    return token;
  }, []);

  const handleGetDirections = () => {
    const destination = "1307+8th+Avenue,+Suite+303,+Fort+Worth,+Texas+76104";
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, '_blank');
  };

  if (!mapboxToken) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-red-500">Error: Mapbox token no encontrado</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Map
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/outdoors-v12"
          mapboxAccessToken={mapboxToken}
          style={{ width: '100%', height: 500 }}
          attributionControl={false}
          initialViewState={viewState}
        >
          <NavigationControl position="top-right" />
          <Marker
            longitude={-97.3334}
            latitude={32.7304}
            color="red"
            onClick={() => setShowPopup(true)}
          />
          {showPopup && (
            <Popup
              longitude={-97.3334}
              latitude={32.7304}
              anchor="top"
              onClose={() => setShowPopup(false)}
              closeButton={true}
              closeOnClick={false}
              className="custom-popup"
            >
              <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 relative mb-2 rounded-full overflow-hidden">
                  <Image
                    src={DrHornImage}
                    alt="Dr. Horn"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-800 font-zen">Dr. Horn</h3>
                <p className="text-sm text-gray-600 mb-2 font-zen">Southside Endodontics</p>
                <button
                  onClick={handleGetDirections}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0a2a54] text-white rounded-lg hover:bg-transparent hover:text-[#0a2a54] border-2 border-[#0a2a54] transition-colors"
                >
                  <Navigation size={16} />
                  <span className='font-inter'>Go to the Office</span>
                </button>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
};

export default Maps;