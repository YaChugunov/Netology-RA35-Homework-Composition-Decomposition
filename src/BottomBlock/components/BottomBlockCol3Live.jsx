import React from 'react';

/**
 * Компонент 'Рекламное объявление'
 * @function BottomBlockLive
 * @description. Вывод рекламного объявления справа от новостей.
 * @param {string} pic путь (url) к картинке объявления
 * @param {string} title заголовок объявления
 * @param {string} text текст объявления
 * @param {string} url ссылка (url) на объявление
 */
export default function BottomBlockLive(props) {
  return (
    <div className="bottom-block-live">
      <h4>Эфир</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
        malesuada urna, eget semper nulla.
      </p>
    </div>
  );
}
