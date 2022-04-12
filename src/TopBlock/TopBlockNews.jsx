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
export default function TopBlockNews(props) {
  const tabs = props.tabs;
  const tabsLen = tabs.length;

  const tabsRow = tabs.map((tab) => {
    return <span>{tab}</span>;
  });

  return (
    <div className="top-block-news">
      <div className="top-block-news-tabs">{tabsRow}</div>
      <ul>
        <NewsItem icon={''} text={'Заголовок новости 1'} url={'#'} />
      </ul>
    </div>
  );
}
