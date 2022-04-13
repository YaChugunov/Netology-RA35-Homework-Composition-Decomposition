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
 * Компонент вывода верхней части страницы (BottomBlock):
 * - блок новостей (BottomBlockTV)
 * - блок рекламы
 * @function BottomBlockTV
 * @description компонент вывода верхней части страницы
 */
export default function BottomBlockTV() {
  const tvData = [
    {time: '02:00', show: 'ТНТ. Best', channel: 'ТНТ International'},
    {time: '02:15', show: 'Джинглики', channel: 'Карусель INT'},
    {time: '02:25', show: 'Наедине со всеми', channel: 'Первый'},
  ]
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
