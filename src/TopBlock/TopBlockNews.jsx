import React from 'react';

import NewsItem from './NewsItem';

/**
 * Компонент 'Новости'
 * @function TopBlockNews
 * @description. Вывод новостей.
 * @param {string} props.tabs вкладки типов новостей
 * @param {string} props.datetime вывод даты/времени
 * @param {string} icon путь (url) к иконке новости
 * @param {string} text текст новости
 * @param {string} url ссылка (url) на самму новость
 */
export default function TopBlockNews() {
  return (
    <div className="top-block-news">
      <h3>Новости</h3>
      <ul>
        <NewsItem icon={''} text={'Заголовок новости 1'} url={'#'} />
      </ul>
    </div>
  );
}
