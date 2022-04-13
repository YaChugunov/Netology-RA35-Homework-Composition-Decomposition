import React from 'react';
import './topblock.css';

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
  const tabs = [
    { id: '1', title: 'Сейчас в СМИ', url: '#' },
    { id: '2', title: 'В России', url: '#' },
    { id: '3', title: 'Рекомендуем', url: '#' },
  ];
  const news = [
    {
      id: '1',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
      title: 'Новость 1 новость 1 новость 1 новость 1 новость 1',
      url: '#',
    },
    {
      id: '2',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/50744/254114763-1478693759388-square/logo-square',
      title: 'Новость 2 новость 2 новость 2 новость 2 новость 2',
      url: '#',
    },
    {
      id: '3',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/50744/1013-1496416510291-square/logo-square',
      title: 'Новость 3 новость 3 новость 3 новость 3 новость 3',
      url: '#',
    },
  ];

  return (
    <div className="top-block">
      <TopBlockNews tabs={tabs} news={news} />
      <TopBlockAdv />
    </div>
  );
}
