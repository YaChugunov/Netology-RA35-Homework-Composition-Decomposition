import React from 'react';

/**
 * Импортируем компоненты для TopBlockNews
 */
import TopBlockTabLinks from './TopBlockTabLinks';
import TopBlockNewsLinks from './TopBlockNewsLinks';
import TopBlockCurrencies from './TopBlockCurrencies';

/**
 * Главный компонент вывода новостей
 * @function TopBlockNews
 * @description. Главный компонент вывода новостей.
 *
 * @typedef {Object} Props
 *
 * @param {props} props.tabs вкладки разделов новостей
 * @property {number} id идентификатор вкладки
 * @property {string} title название вкладки
 * @property {string} url ссылка (url) на страницу вкладки
 *
 * @param {props} props.news набор текущих новостей
 * @property {number} id идентификатор новости
 * @property {string} icon путь (url) к иконке новости
 * @property {string} title название новости
 * @property {string} url ссылка (url) на самму новость
 *
 * @param {props} currencies набор валют
 * @property {number} id идентификатор валюты
 * @property {string} title название валюты
 * @property {string} url ссылка (url) на страницу курса
 * @property {string} rate текущий курс
 * @property {string} diff изменение курса
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
