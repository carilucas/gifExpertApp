import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components.js/addCategory';


describe('Test <AddCategory />', () => {
   const setCategories = ()=>{}
   const wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
   test('Debe mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });
   
   test('Debe cambiar el input', () => {
      const input = wrapper.find('input');
      const value = 'Hola mundo';
      input.simulate('change',{
         target:{
            value
         }
      });
      console.log(input.html());
      
   });
})
