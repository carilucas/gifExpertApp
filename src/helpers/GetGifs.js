


export const getGifs = async(category)=>{
   try {
      const apiKey = 'w96qRFI3PbHoipqO9YaDTyfOo0SPwNlF'
      const respuesta = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`);
      const {data} = await respuesta.json();
      
      const gifs = data.map(img=>({
         id:img.id,
         title:img.title ? img.title : 'Sin Título',
         url:img.images.downsized_medium.url ? img.images.downsized_medium.url : 'No existe esta imagen'
      }));
      return gifs;
   } catch (error) {
      throw new Error(error)
   }
}