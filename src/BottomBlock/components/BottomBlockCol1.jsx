import React from 'react';

import BottomBlockCol1Weather from './BottomBlockCol1Weather';
import BottomBlockCol1Links from './BottomBlockCol1Links';

/**
 * Вложенный компонент вывода блока 1 с набором виджетов:
 * - Погода (BottomBlockCol1Weather)
 * - Посещаемое (BottomBlockCol1Links)
 * @function BottomBlockCol1
 * @description Вложенный компонент вывода блока 1 с набором виджетов
 */
export default function BottomBlockCol1() {
  return (
    <>
      <BottomBlockCol1Weather />
      <BottomBlockCol1Links />
    </>
  );
}
