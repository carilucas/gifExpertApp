import React from 'react';
import PropTypes from 'prop-types'

export const GifGridItem = ({title,url}) => {
   
   return (
      <div className="animate__animated animate__fadeIn card">
         <h4>{title}</h4>
         <img src={url} alt={title}/>
      </div>
   )
}

GifGridItem.propTypes={
   title:PropTypes.string.isRequired,
   url:PropTypes.string.isRequired,
}