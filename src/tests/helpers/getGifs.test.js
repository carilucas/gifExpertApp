import React from 'react';
import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/GetGifs';

describe('Pruebas con getGifs', () => {
   test('Debe tener 10 elementos', async() => {
      const gifs = await getGifs('naruto');
      
      expect(gifs.length).toBe(10)
   });
   
   test('Si no se envía categoría son 0 elementos', async() => {
      const gifs = await getGifs('');
      
      expect(gifs.length).toBe(0)
   });
})
