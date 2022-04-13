import React from 'react';

import BottomBlockSchedule from './BottomBlockSchedule';
import BottomBlockTV from './BottomBlockTV';

/**
 * Компонент вывода верхней части страницы (BottomBlock):
 * - блок новостей (TopBlockNews)
 * - блок рекламы
 * @function BottomBlockCol2
 * @description компонент вывода верхней части страницы
 */
export default function BottomBlockCol2(props) {
  return (
    <>
      <BottomBlockSchedule />
      <BottomBlockTV />
    </>
  );
}
