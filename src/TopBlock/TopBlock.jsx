import React from 'react';

import TopBlockNews from './TopBlockNews';
import TopBlockAdv from './TopBlockAdv';

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (TopBlockNews)
 * - блок рекламы
 * @function TopBlock
 * @description компонент вывода верхней части страницы
 */
export default function TopBlock(props) {
  const tabItems = ['Сейчас в СМИ', 'В России', 'Рекомендуем'];

  return (
    <div className="top-block">
      <TopBlockNews tabs={tabItems} />
      <TopBlockAdv />
      <TopBlockCurrencies />
    </div>
  );
}
