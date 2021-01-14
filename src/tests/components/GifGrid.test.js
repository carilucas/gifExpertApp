import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components.js/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas de GifGrid', () => {

   const category = 'Saitama';

   test('Debe tener un snapshot', () => {

      useFetchGifs.mockReturnValue({
         data:[],
         loading:true
      })

      const wrapper = shallow(<GifGrid category={category}/>);
      expect(wrapper).toMatchSnapshot();
   });
   
   test('Debe mostrar items cuando se carga imágenes', () => {
      const gifs = [{
         id:'124',
         url:'http://algo.com',
         title: 'Titulo'
      }];
      useFetchGifs.mockReturnValue({
         data:gifs,
         loading:false
      });
      const wrapper = shallow(<GifGrid category={category}/>);
      expect(wrapper).toMatchSnapshot();
      expect( wrapper.find('p').exists() ).toBe(false);
      
      expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
   })
   

})
