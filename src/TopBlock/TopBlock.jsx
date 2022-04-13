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
    { id: '1', title: 'Сейчас в СМИ', url: '#tab1' },
    { id: '2', title: 'В России', url: '#tab2' },
    { id: '3', title: 'Рекомендуем', url: '#tab3' },
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
  const currencies = [
    { id: '1', title: 'USD MOEX', url: '#url1', rate: '63.52', diff: '+0.09' },
    { id: '2', title: 'EUR MOEX', url: '#url2', rate: '85.12', diff: '+0.14' },
    { id: '3', title: 'Нефть', url: '#url3', rate: '64.90', diff: '+1.63%' },
  ];

  return (
    <div className="top-block">
      <TopBlockNews tabs={tabs} news={news} currencies={currencies} />
      <TopBlockAdv />
    </div>
  );
}
