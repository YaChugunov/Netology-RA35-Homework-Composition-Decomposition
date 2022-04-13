import React from 'react';
import './assets/css/middleblock.css';

import MiddleBlockSearch from './components/MiddleBlockSearch';
import MiddleBlockBanner from './components/MiddleBlockBanner';

/**
 * Компонент вывода средней части страницы (MiddleBlock):
 * - блок поиска (MiddleBlockSearch)
 * - рекламный баннер (MiddleBlockBanner)
 * @function MiddleBlock
 * @description Компонент вывода средней части страницы.
 */

/**
 * Импортируем данные для компонента MiddleBlockSearch из json-файла и передаем в компонент
 */
import linksData from './data/links.json';

export default function MiddleBlock(props) {
  return (
    <div className="middle-block">
      <MiddleBlockSearch links={linksData} />
      <MiddleBlockBanner />
    </div>
  );
}
