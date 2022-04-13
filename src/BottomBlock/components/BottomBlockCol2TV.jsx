import React from 'react';

/**
 * Компонент вывода верхней части страницы (BottomBlock):
 * - блок новостей (BottomBlockTVItems)
 * - блок рекламы
 * @function BottomBlockTVItems
 * @description компонент вывода верхней части страницы
 */
 export default function BottomBlockTVItem(props) {
  return (
    <div className="bottom-block-tv-item">
      <div className="time">{props.time}</div>
      <div className="show">{props.show}</div>
      <div className="channel">{props.channel}</div>
    </div>
  );
}

/**
 * Импортируем данные для компонента MiddleBlockSearch из json-файла и передаем в компонент
 */
 import tvData from './data/tvshows.json';

/**
 * Компонент вывода верхней части страницы (BottomBlock):
 * - блок новостей (BottomBlockTV)
 * - блок рекламы
 * @function BottomBlockTV
 * @description компонент вывода верхней части страницы
 */
export default function BottomBlockTV() {
  const tvItems = tvData.map((item) => {
    return <BottomBlockTVItem time={item.time} show={item.show} channel={item.channel} />;
  });

  return (
    <div className="bottom-block-tv">
      <h4>Телепрограмма</h4>
      {tvItems}
    </div>
  );
}
