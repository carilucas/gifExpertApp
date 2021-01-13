import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components.js/addCategory';


describe('Test <AddCategory />', () => {
   const setCategories = ()=>{}
   test('Debe mostrarse correctamente', () => {
      const wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
      expect(wrapper).toMatchSnapshot();
   })
      
})
