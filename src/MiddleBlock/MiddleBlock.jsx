import React from 'react';
import './middleblock.css';

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
  const links = [
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Эфир',
    'Еще',
  ];
  return (
    <div className="middle-block">
      <MiddleBlockSearch links={links} />
      <MiddleBlockBanner />
    </div>
  );
}
