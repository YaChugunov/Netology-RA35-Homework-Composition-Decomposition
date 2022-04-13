import React from 'react';

/**
 * Вложенный компонент вывода одиночной тв-передачи
 * @function BottomBlockTVItem
 * @description. Вложенный компонент вывода одиночной тв-передачи.
 *
 * @typedef {Object} Props
 * @param {props} props объект одиночной тв-передачи 
 * @property {string} props.time время тв-передачи
 * @property {string} props.show название тв-передачи
 * @property {string} props.channel тв-канал
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
 * Импортируем данные для компонента BottomBlockTV из json-файла и передаем в компонент
 */
 import tvData from '../data/tvshows.json';

/**
 * Компонент вывода программы тв-передач (BottomBlockTV):
 * @function BottomBlockTV
 * @description компонент вывода верхней части страницы
 * 
 * @typedef {Object} tvItems Объект из компонентов BottomBlockTVItem

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
