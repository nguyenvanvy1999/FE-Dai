import { useRef } from 'react'
import ShortcutItem from './ShortcutItem'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick-carousel-custom.css'

function Shortcuts() {
  const sliderRef = useRef<Slider>(null)

  const settings: SliderSettings = {
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <>
      <div className="flex items-center h-20">
        <h3 className="text-md font-semibold">Lối tắt</h3>
        <div className="flex-grow mx-4 h-0.5 bg-gray-300"></div>
        <div className="w-12 h-10 ml-8 py-4 relative flex items-center justify-center">
          <button
            className="slick-prev slick-arrow bg-gray-300 w-10 h-10 hover:bg-green-600 focus:bg-green-600"
            onClick={handlePrev}
          ></button>
          <button
            className="slick-next slick-arrow bg-gray-300 w-10 h-10 hover:bg-green-600 focus:bg-green-600"
            onClick={handleNext}
          ></button>
        </div>
      </div>
      <div>
        <Slider {...settings} ref={sliderRef}>
          <ShortcutItem />
          <ShortcutItem />
          <ShortcutItem />
          <ShortcutItem />
          <ShortcutItem />
          <ShortcutItem />
        </Slider>
      </div>
    </>
  )
}

export default Shortcuts

interface SliderSettings {
  slidesToShow: number
  responsive: {
    breakpoint: number
    settings: {
      slidesToShow: number
    }
  }[]
}
