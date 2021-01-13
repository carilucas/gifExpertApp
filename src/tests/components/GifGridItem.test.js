import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components.js/GifGridItem'

describe('Test del GifgridItem', ()=>{
   const title = 'goku';
   const url = 'http://url.com';
   let wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
   beforeEach(()=>{
      wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
   });
   test('Debe mostrar el componente correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('El título debe estar en el h4', () => {
      const titleExpect = wrapper.find('h4').text();
      expect(titleExpect).toBe(title);
   });
   
   test('La imagen debe tener la url  y alt', () => {
      const urlExpect = wrapper.find('img');
      
      expect(urlExpect.props().src).toBe(url);
      expect(urlExpect.props().alt).toBe(title);
      
   });
   
   test('El div externo Debe tener la clase animate__fadeIn', () => {
      const div = wrapper.find('div');
      
      expect(div.props().className.includes('animate__fadeIn')).toBe(true)
      
   });
})