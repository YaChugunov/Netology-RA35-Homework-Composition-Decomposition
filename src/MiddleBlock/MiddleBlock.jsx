import React from 'react';
import './assets/css/middleblock.css';

import MiddleBlockSearch from './components/MiddleBlockSearch';
import MiddleBlockBanner from './components/MiddleBlockBanner';

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (TopBlockNews)
 * - блок рекламы
 * @function MiddleBlock
 * @description компонент вывода верхней части страницы
 */
export default function MiddleBlock(props) {
  const linksData = [
    { title: 'Видео', url: '#link1' },
    { title: 'Картинки', url: '#link2' },
    { title: 'Новости', url: '#link3' },
    { title: 'Карты', url: '#link4' },
    { title: 'Маркет', url: '#link5' },
    { title: 'Переводчик', url: '#link6' },
    { title: 'Эфир', url: '#link7' },
    { title: 'Еще', url: '#link8' },
  ];
  return (
    <div className="middle-block">
      <MiddleBlockSearch links={linksData} />
      <MiddleBlockBanner />
    </div>
  );
}
