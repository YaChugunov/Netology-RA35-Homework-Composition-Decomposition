import React from 'react';

/**
 * Компонент 'Вывод курсов валют'
 * @function TopBlockCurrencies
 * @description. Вывод рекламного объявления справа от новостей.
 * @param {string} currency заголовок объявления
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
