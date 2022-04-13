import React from 'react';

import MiddleBlockTabs from './MiddleBlockTabs';
import MiddleBlockSearch from './MiddleBlockSearch';
import MiddleBlockBanner from './MiddleBlockBanner';

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (TopBlockNews)
 * - блок рекламы
 * @function MiddleBlock
 * @description компонент вывода верхней части страницы
 */
export default function MiddleBlock(props) {
  const tabItems = ['Сейчас в СМИ', 'В России', 'Рекомендуем'];

  return (
    <div className="middle-block">
      <MiddleBlockTabs tabs={tabItems} />
      <MiddleBlockSearch />
      <MiddleBlockBanner />
    </div>
  );
}
