import Image from 'next/image'
import heroPC from '@/public/heroPC.png'
import './styles/buttonStyles.css'

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src={heroPC}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a S-E</h1>
          <p className="text-xl md:text-2xl mb-8">Soluciones Empresariales Innovadoras</p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary">
              Conócenos
            </button>
            <button className="btn-secondary">
              Nuestros Servicios
            </button>
            <button className="btn-tertiary">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 