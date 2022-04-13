import React from 'react';

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (BottomBlockLinks)
 * - блок рекламы
 * @function BottomBlockLinks
 * @description компонент вывода верхней части страницы
 */
export default function BottomBlockLinks(props) {
  return (
    <div className="bottom-block-links">
      <h4>Посещаемое</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
        malesuada urna, eget semper nulla.
      </p>
    </div>
  );
}
