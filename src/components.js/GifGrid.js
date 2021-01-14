import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types'


export const GifGrid = ({category}) => {
    
   const {data:images,loading} = useFetchGifs(category);
   return(
      <>
         <h3 className="animate__animated animate__fadeIn">{category.toUpperCase()}</h3>
         {loading ? <p className="animate__animated animate__flash">Cargando...</p> : null}
         <div className="card-grid">
            {
               images.map(img=><GifGridItem {...img} key={img.id}/>)
            }
         </div>
      </>
   )
}

GifGrid.propTypes = {
   category: PropTypes.string.isRequired
}