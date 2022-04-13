import React from 'react';

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (BottomBlockWeather)
 * - блок рекламы
 * @function BottomBlockWeather
 * @description компонент вывода верхней части страницы
 */
export default function BottomBlockWeather(props) {
  return (
    <div className="bottom-block-weather">
      <h4>Погода</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
        malesuada urna, eget semper nulla.
      </p>
    </div>
  );
}
