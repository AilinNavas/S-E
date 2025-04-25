"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import one from '@/public/insurancebyn/1.jpeg'
import two from '@/public/insurancebyn/2.jpeg'
import three from '@/public/insurancebyn/3.jpeg'
import four from '@/public/insurancebyn/4.jpeg'
import five from '@/public/insurancebyn/5.jpeg'
import six from '@/public/insurancebyn/6.jpeg'
import seven from '@/public/insurancebyn/7.jpeg'
import eight from '@/public/insurancebyn/8.jpeg'
import nine from '@/public/insurancebyn/9.jpeg'
import ten from '@/public/insurancebyn/10.jpeg'
import eleven from '@/public/insurancebyn/11.jpeg'
import twelve from '@/public/insurancebyn/12.jpeg'
import thirteen from '@/public/insurancebyn/13.jpeg'
import fourteen from '@/public/insurancebyn/14.jpeg'

const DoubleCrrousel = () => {

    const topCarouselRef = useRef(null)
    const bottomCarouselRef = useRef(null)

    // Logos de ejemplo - reemplazar con tus propios logos
    const logos = [
        { id: 1, src: one, alt: "Logo 1" },
        { id: 2, src: two, alt: "Logo 2" },
        { id: 3, src: three, alt: "Logo 3" },
        { id: 4, src: four, alt: "Logo 4" },
        { id: 5, src: five, alt: "Logo 5" },
        { id: 6, src: six, alt: "Logo 6" },
        { id: 7, src: seven, alt: "Logo 7" },
        { id: 8, src: eight, alt: "Logo 8" },
        { id: 9, src: nine, alt: "Logo 9" },
        { id: 10, src: ten, alt: "Logo 10" },
        { id: 11, src: eleven, alt: "Logo 11" },
        { id: 12, src: twelve, alt: "Logo 12" },
        { id: 13, src: thirteen, alt: "Logo 13" },
        { id: 14, src: fourteen, alt: "Logo 14" },
    ]

    // Duplicamos los logos para crear el efecto infinito
    const duplicatedLogos = [...logos, ...logos]

    useEffect(() => {
        const topCarousel = topCarouselRef.current
        const bottomCarousel = bottomCarouselRef.current

        // Función para verificar si el carrusel necesita reiniciarse
        const checkTopPosition = () => {
            if (topCarousel) {
                const { scrollLeft, scrollWidth, clientWidth } = topCarousel

                // Si llegamos al final, volvemos al inicio sin animación
                if (scrollLeft >= scrollWidth / 2) {
                    topCarousel.scrollTo({ left: 0, behavior: "auto" })
                }
            }
        }

        const checkBottomPosition = () => {
            if (bottomCarousel) {
                const { scrollLeft } = bottomCarousel

                // Si llegamos al inicio, volvemos al final sin animación
                if (scrollLeft <= 0) {
                    bottomCarousel.scrollTo({
                        left: bottomCarousel.scrollWidth / 2,
                        behavior: "auto",
                    })
                }
            }
        }

        // Inicializar la posición del carrusel inferior
        if (bottomCarousel) {
            bottomCarousel.scrollTo({
                left: bottomCarousel.scrollWidth / 2,
                behavior: "auto",
            })
        }

        // Función para animar los carruseles
        const animateTopCarousel = () => {
            if (topCarousel) {
                topCarousel.scrollBy({ left: 1, behavior: "auto" })
                checkTopPosition()
            }
        }

        const animateBottomCarousel = () => {
            if (bottomCarousel) {
                bottomCarousel.scrollBy({ left: -1, behavior: "auto" })
                checkBottomPosition()
            }
        }

        // Configurar los intervalos de animación
        const topInterval = setInterval(animateTopCarousel, 20)
        const bottomInterval = setInterval(animateBottomCarousel, 20)

        // Limpiar los intervalos cuando el componente se desmonte
        return () => {
            clearInterval(topInterval)
            clearInterval(bottomInterval)
        }
    }, [])

    return (
        <div className="w-full overflow-hidden py-8">
            {/* Carrusel superior - se mueve hacia la derecha */}
            <div ref={topCarouselRef} className="flex overflow-x-hidden mb-8 py-4">
                {duplicatedLogos.map((logo, index) => (
                    <div key={`top-${logo.id}-${index}`} className="flex-shrink-0 mx-6">
                        <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} className="h-24 w-auto object-contain" />
                    </div>
                ))}
            </div>

            {/* Carrusel inferior - se mueve hacia la izquierda */}
            <div ref={bottomCarouselRef} className="flex overflow-x-hidden py-4">
                {duplicatedLogos.map((logo, index) => (
                    <div key={`bottom-${logo.id}-${index}`} className="flex-shrink-0 mx-6">
                        <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} className="h-24 w-auto object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoubleCrrousel