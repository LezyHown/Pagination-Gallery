import React, { useEffect, useState } from 'react'
import './page.scss'

import { motion } from 'framer-motion'

export default function Page(props) {
  const images = props.photos,
        [isLoaded, setLoaded] = useState(false),
        loadGif = 'https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif'

  let lastIndex  = props.currentPage * props.COUNT_PER_PAGE, 
      startIndex = lastIndex - props.COUNT_PER_PAGE

  var random = require('random-number');
  useEffect(() => { setLoaded(false) }, [props.currentPage])

  return (
    <div className='main-page'>
      { 
        images !== null ? 
          images.slice(startIndex, lastIndex).map(_img =>
              <motion.img animate={{ rotate: '3deg' }} 
              onLoad={() => setTimeout(() => setLoaded(true), random({options:{min: 500, max: 3000}}))} 
              src={ !isLoaded ? loadGif : _img.src.large2x}/> 
          ) : <span className='err-msg'>Sorry, failed to load images...</span>
      }
    </div>
  )
}
