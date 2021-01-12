import React , {useState}from 'react'
import { AddCategory } from './components.js/AddCategory';
import { GifGrid } from './components.js/GifGrid';

export const GifExpertApp = () => {
   
   const [categories, setCategories] = useState(['naruto']);
   
   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={setCategories}/>
         <hr/>
         
         <ul>
         {
            categories.map((category) =>{
               return<GifGrid category={category} key={category}/>;
            })
         }
         </ul>
         
      </>
   )
};
