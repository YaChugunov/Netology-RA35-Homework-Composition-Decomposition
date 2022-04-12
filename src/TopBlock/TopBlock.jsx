import React from 'react';

import TopBlockNews from './TopBlockNews';
import TopBlockAdv from './TopBlockAdv';

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (TopBlockNews)
 * - блок рекламы
 * @function TopBlock
 * @description компонент вывода верхней части страницы
 * @param {number} описание параметра
 */
export default function TopBlock() {
  return (
    <div className="top-block">
      <TopBlockNews />
      <TopBlockAdv />
    </div>
  );
}
