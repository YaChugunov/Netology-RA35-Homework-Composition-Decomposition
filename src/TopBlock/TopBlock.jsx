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
      title:
        'Sed et malesuada urna, eget semper nulla. Sed pharetra ipsum a libero sollicitudin, vel vulputate ante lacinia',
      url: '#',
    },
    {
      id: '2',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/50744/254114763-1478693759388-square/logo-square',
      title:
        'Cras consectetur, sem non imperdiet faucibus, sem erat molestie nisl, non ornare massa dolor eget turpis.',
      url: '#',
    },
    {
      id: '3',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/50744/1013-1496416510291-square/logo-square',
      title:
        'Praesent eget commodo nunc, porttitor blandit dui. Aenean accumsan consequat blandit',
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
