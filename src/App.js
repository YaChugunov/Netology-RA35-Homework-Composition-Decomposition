import React from 'react';
import './style.css';

/**
 * Задание:
 * Разбейте интерфейс на компоненты и в файле каждого компонента напишите
 * буквально одну строку комментария, за что данный компонент отвечает.
 *
 * Постарайтесь повторящиеся компоненты сделать настраемыми за счёт props.
 * Допустим, у каждой новости в списке новостей: иконка, текст и ссылка.
 * Функциональность и стилизацию реализовывать не нужно, достаточно базового
 * оформления (чтобы видно было все блоки).
 *
 */

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (TopBlockNews)
 * - блок рекламы
 * @function TopBlock
 * @description компонент вывода верхней части страницы
 * @param {number} описание параметра
 */
function TopBlock() {
  return (
    <>
      <TopBlockNews />
      <TopBlockAdv />
    </>
  );
}

/**
 * Компонент 'Новости'
 * @function TopBlockNews
 * @description. Вывод новостей.
 * @param {string} props.tabs вкладки типов новостей
 * @param {string} props.icon путь (url) к иконке новости
 * @param {string} props.text текст новости
 * @param {string} props.url ссылка (url) на самму новость
 * @param {string} props.datetime вывод даты/времени
 */
function TopBlockNews(props) {
  return <>Новости</>;
}

/**
 * Компонент 'Рекламное объявление'
 * @function TopBlockAdv
 * @description. Вывод рекламного объявления справа от новостей.
 * @param {string} pic путь (url) к картинке объявления
 * @param {string} title заголовок объявления
 * @param {string} text текст объявления
 * @param {string} url ссылка (url) на объявление
 */
function TopBlockAdv(props) {
  return <>Реклама</>;
}

export default function App() {
  return (
    <div>
      <TopBlock />
    </div>
  );
}

/**
 * @license. MIT
 * Copyright (c) 2022 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * ...
 */
