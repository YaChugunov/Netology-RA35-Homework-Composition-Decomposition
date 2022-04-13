import React from 'react';

import BottomBlockCol2Schedule from './BottomBlockCol2Schedule';
import BottomBlockCol2TV from './BottomBlockCol2TV';

/**
 * Вложенный компонент вывода блока 2 с набором виджетов:
 * - Карта России (BottomBlockCol2Schedule)
 * - Телепрограмма (BottomBlockCol2TV)
 * @function BottomBlockCol2
 * @description Вложенный компонент вывода блока 2 с набором виджетов
 */
export default function BottomBlockCol2() {
  return (
    <>
      <BottomBlockCol2Schedule />
      <BottomBlockCol2TV />
    </>
  );
}
