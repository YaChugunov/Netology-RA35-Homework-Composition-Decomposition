import React from 'react';

/**
 * Вложенный компонент вывода курсов валют
 * @function TopBlockCurrencies
 * @description. Вложенный компонент вывода курсов валют.
 *
 * @typedef {Object} Props
 * @property {number} props.id идентификатор валюты
 * @property {string} props.title название валюты
 * @property {string} props.url ссылка (url) на страницу курса
 * @property {string} props.rate текущий курс
 * @property {string} props.diff изменение курса
 */
export default function TopBlockCurrencies(props) {
  return (
    <span>
      <a href={props.url}>
        <b>{props.title}</b> {props.rate} {props.diff}
      </a>
    </span>
  );
}
