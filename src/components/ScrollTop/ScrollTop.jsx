import React, { useEffect, useState } from 'react'
import { RiArrowUpDoubleLine } from "react-icons/ri";
import './ScrollTop.css'

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const toggleVisibility = () =>
        window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)
  
      window.addEventListener('scroll', toggleVisibility)
      return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])
  
    return isVisible ? (
      <div className='scroll-top'>
        <a href='#top'>
          <RiArrowUpDoubleLine />
        </a>
      </div>
    ) : null
}
  
export default ScrollTop
  