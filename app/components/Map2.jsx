'use client'
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



const MapboxMap = () => {
  const mapContainerRef = useRef(null);  // Referencia para el contenedor del mapa

  useEffect(() => {
    // Verificar si el token está disponible
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!mapboxToken) {
      console.error('Mapbox token no encontrado');
      return;
    }

    // Inicializar el mapa
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,  // El contenedor donde se renderiza el mapa
      style: 'mapbox://styles/mapbox/outdoors-v12',  // Estilo de mapa de Mapbox
      center: [-97.3334, 32.7304],  // Coordenadas de inicio
      zoom: 15,  // Nivel de zoom
      accessToken: mapboxToken,  // Token de Mapbox
    });

    // Añadir un marcador
    const marker = new mapboxgl.Marker()
      .setLngLat([-97.3334, 32.7304])
      .addTo(map);

    // Añadir una ventana emergente en el marcador
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML('<h3>Dr. Horn</h3><p>Southside Endodontics</p>');

    marker.setPopup(popup);

    // Limpiar el mapa cuando el componente se desmonte
    return () => map.remove();
  }, []);

  return (
    <div className="w-full h-96">
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: '100%' }}
        className="rounded-lg"
      ></div>
    </div>
  );
};

export default MapboxMap;
