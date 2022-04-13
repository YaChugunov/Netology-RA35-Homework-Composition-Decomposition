import React from 'react';

import TopBlockTabLinks from './TopBlockTabLinks';
import TopBlockNewsLinks from './TopBlockNewsLinks';
import TopBlockCurrencies from './TopBlockCurrencies';

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
  const news = props.news;
  const currencies = props.currencies;

  const tabLinks = tabs.map((link) => {
    return <TopBlockTabLinks title={link.title} url={link.url} />;
  });
  const newsLinks = news.map((link) => {
    return (
      <TopBlockNewsLinks
        id={link.id}
        icon={link.icon}
        title={link.title}
        url={link.url}
      />
    );
  });
  const currs = currencies.map((item) => {
    return (
      <TopBlockCurrencies
        title={item.title}
        url={item.title}
        rate={item.rate}
        diff={item.diff}
      />
    );
  });

  return (
    <div className="top-block-news">
      <div className="top-block-news-tabs">{tabLinks}</div>
      <ul className="top-block-news-links">{newsLinks}</ul>
      <div className="top-block-news-currencies">{currs}</div>
    </div>
  );
}
