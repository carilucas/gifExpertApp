import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components.js/addCategory';


describe('Test <AddCategory />', () => {
   const setCategories = jest.fn();
   let wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
   beforeEach(()=>{
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
   })
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
   });

   test('No debe de postear la informacin on submit', () => {
      wrapper.find('form').simulate('submit',{preventDefault:()=>{}});

      expect(setCategories).not.toHaveBeenCalled();
   });

   test('Debe llamar el setCategories y limpiar la caja de texto', () => {
      const value = 'naruto';
      const emptyVal = '';
      wrapper.find('input').simulate('change',{target:{value}});
      wrapper.find('form').simulate('submit',{preventDefault(){}});
      

      expect(setCategories).toHaveBeenCalled();
      
      expect(wrapper.find('input').prop('value')).toBe('');

   })
   

})
