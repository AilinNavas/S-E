
"use client"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

// Simulación de API KEY de Mapbox (en producción, usar variables de entorno)
const MAPBOX_API_KEY = "pk.eyJ1IjoibmF2YXNhaWxpbiIsImEiOiJjbTlianh2YWwwZ3BoMmpwdmYwNnAzdjE2In0.5KBaXCLU59ORKQBcdSAB0w"

// Datos de la clínica dental
const clinicData = {
  name: "Southside Endodontics",
  doctor: "Dr. Neal Horn",
  doctorImage: "/images/about-us/Neal.webp", // Imagen de placeholder
  location: {
    longitude: -97.3334, // Ejemplo de coordenadas (Nueva York)
    latitude: 32.7304,
  },
  address: "1307 8th Ave #303, Fort Worth, TX 76104, Estados Unidos",
  phone: "+18173869007",
}

export default function DentalClinicMap() {


  const mapContainer = useRef(null)
  const map = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const pathname = usePathname()


  useEffect(() => {
    // Guardar la posición de scroll actual
    const scrollPosition = window.scrollY

    // Configurar Mapbox
    mapboxgl.accessToken = MAPBOX_API_KEY

    // Inicializar el mapa si no existe
    if (!map.current) {
      // Crear el mapa con scrollZoom desactivado inicialmente para evitar problemas de scroll
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12", // Estilo del mapa
        center: [clinicData.location.longitude, clinicData.location.latitude], // Centrar en la ubicación de la clínica
        zoom: 14, // Nivel de zoom
        scrollZoom: false, // Desactivar zoom con scroll para evitar interferencias
        attributionControl: false, // Desactivar el control de atribución para evitar problemas de enfoque
        interactive: false, // Inicialmente no interactivo para evitar problemas de enfoque
      })

      // Añadir controles de navegación después de un breve retraso
      setTimeout(() => {
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right")
        // Habilitar interactividad después de la carga inicial
        map.current.scrollZoom.enable()
        map.current.dragPan.enable()
        map.current.touchZoomRotate.enable()
        map.current._container.focus = () => { } // Anular la función de enfoque
        map.current.getCanvas().setAttribute("tabindex", "-1") // Evitar que reciba enfoque por tabulación
      }, 500)

      // Cuando el mapa termine de cargar
      map.current.on("load", () => {
        setMapLoaded(true)

        // Restaurar la posición de scroll
        window.scrollTo(0, scrollPosition)

        // Crear elemento HTML personalizado para el popup
        const popupEl = document.createElement("div")
        popupEl.className = "custom-popup"

        // Crear el contenido del popup
        const popupContent = document.createElement("div")
        popupContent.className = "p-2 flex flex-col items-center"

        // Imagen del doctor
        const doctorImg = document.createElement("img")
        doctorImg.src = clinicData.doctorImage
        doctorImg.alt = clinicData.doctor
        doctorImg.className = "w-12 h-12 rounded-full object-cover mb-2"
        popupContent.appendChild(doctorImg)

        // Nombre de la clínica
        const clinicName = document.createElement("h3")
        clinicName.textContent = clinicData.name
        clinicName.className = "font-bold text-sm mb-1 font-zen"
        popupContent.appendChild(clinicName)

        // Nombre del doctor
        const doctorName = document.createElement("p")
        doctorName.textContent = clinicData.doctor
        doctorName.className = "text-xs text-gray-600 mb-2 font-inetr"
        popupContent.appendChild(doctorName)

        // Botón para direcciones
        const directionsBtn = document.createElement("button")
        // directionsBtn.textContent = "Go to the office"
        directionsBtn.textContent = pathname === "/endodoncista-de-habla-hispana"
          ? "Ir a la clínica"
          : "Go to the office"

        directionsBtn.className =
          "bg-[#0a2a54] hover:bg-transparent hover:text-[#0a2a54] font-inter border border-[#0a2a54] text-white text-xs py-1 px-3 rounded-md transition-colors duration-300 mb-2 font-inter cursor-pointer"
        directionsBtn.onclick = (e) => {
          // Prevenir comportamiento por defecto
          e.preventDefault()
          e.stopPropagation()

          // URL para Google Maps con la dirección
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinicData.address)}`
          window.open(mapsUrl, "_blank")
        }
        popupContent.appendChild(directionsBtn)

        popupEl.appendChild(popupContent)

        // Crear el popup con el elemento personalizado
        const popup = new mapboxgl.Popup({
          offset: [-110, 20], // Cambiar el offset para que aparezca más arriba
          closeButton: true,
          closeOnClick: false,
          maxWidth: "300px",
          // Evitar que el popup reciba enfoque automático
          focusAfterOpen: false,
        }).setDOMContent(popupEl)

        // Reemplazar el marcador personalizado con un pin de mapa rojo
        const markerEl = document.createElement("div")
        markerEl.className = "custom-marker"
        markerEl.innerHTML = `
  <div class="flex flex-col items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 24 24" fill="#FF0000" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z" />
      <circle cx="12" cy="9" r="3" fill="white" />
    </svg>
  </div>
`

        // Añadir el marcador al mapa con el popup
        new mapboxgl.Marker(markerEl)
          .setLngLat([clinicData.location.longitude, clinicData.location.latitude])
          .setPopup(popup)
          .addTo(map.current)

        // Mostrar el popup por defecto, pero con un pequeño retraso para evitar problemas de scroll
        setTimeout(() => {
          popup.addTo(map.current)
        }, 1000)
      })
    }

    // Limpiar al desmontar
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  // Prevenir el comportamiento de scroll en el contenedor del mapa
  const handleMapContainerWheel = (e) => {
    // Solo prevenir el comportamiento si el mapa no está siendo interactuado directamente
    if (!e.target.closest(".mapboxgl-canvas-container")) {
      e.stopPropagation()
    }
  }

  return (
    <div className="w-full h-full" id="map-section">
      <div
        ref={mapContainer}
        className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md"
        style={{ border: "1px solid #e2e8f0" }}
        onWheel={handleMapContainerWheel}
        tabIndex="-1" // Evitar que reciba enfoque por tabulación
      />

    </div>
  )
}
