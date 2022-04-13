import React from 'react';
import './assets/css/topblock.css';

import TopBlockNews from './components/TopBlockNews';
import TopBlockAdv from './components/TopBlockAdv';

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (TopBlockNews)
 * - блок рекламы
 * @function TopBlock
 * @description компонент вывода верхней части страницы
 */

/**
 * Импортируем данные для компонента TopBlockNews из json-файла и передаем в компонент
 */
import news from './data/news.json';
import tabs from './data/tabs.json';
import currencies from './data/currencies.json';

export default function TopBlock(props) {
  return (
    <div className="top-block">
      <TopBlockNews tabs={tabs} news={news} currencies={currencies} />
      <TopBlockAdv />
    </div>
  );
}
