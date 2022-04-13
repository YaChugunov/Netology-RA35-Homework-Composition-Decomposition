import React from 'react';

/**
 * Компонент 'Рекламное объявление'
 * @function TopBlockAdv
 * @description. Вывод рекламного объявления справа от новостей.
 * @param {string} pic путь (url) к картинке объявления
 * @param {string} title заголовок объявления
 * @param {string} text текст объявления
 * @param {string} url ссылка (url) на объявление
 */
export default function TopBlockAdv(props) {
  return (
    <div className="top-block-adv">
      <div>
        <img src="https://avatars.mds.yandex.net/get-banana/28825/x25uPjdRZOI6MSKsMPUV7FTN_banana_20161021_120x90-blue-car-2x402x.png/orig" />
      </div>
      <h4>Рекламный заголовок</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
        malesuada urna, eget semper nulla.
      </p>
    </div>
  );
}
