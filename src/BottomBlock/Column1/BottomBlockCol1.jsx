import React from 'react';

import BottomBlockWeather from './BottomBlockWeather';
import BottomBlockLinks from './BottomBlockLinks';

/**
 * Компонент вывода верхней части страницы (BottomBlock):
 * - блок новостей (BottomBlockCol1)
 * - блок рекламы
 * @function BottomBlockCol1
 * @description компонент вывода верхней части страницы
 */
export default function BottomBlockCol1(props) {
  return (
    <>
      <BottomBlockWeather />
      <BottomBlockLinks />
    </>
  );
}
