import { useEffect, useState } from 'react'
import { ArrowUpIcon } from 'lucide-react'
import { ChevronUp } from 'lucide-react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 border-2 bg-[#B3BBC1]/10 border-[#B3BBC1] text-white rounded-md shadow-lg hover:bg-[#B3BBC1]/25 transition duration-300 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 text-[#B3BBC1]" />
      </button>
    )
  )
}

export default ScrollToTopButton
