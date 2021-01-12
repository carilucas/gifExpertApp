import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {
    
   const {data:images,loading} = useFetchGifs(category);
   return(
      <>
         {loading && <h4 className="animate__animated animate__flash">Cargando...</h4>}
         <h3 className="animate__animated animate__fadeIn">{category.toUpperCase()}</h3>
         <div className="card-grid">
            {
               images.map(img=><GifGridItem {...img} key={img.id}/>)
            }
         </div>
      </>
   )
}
