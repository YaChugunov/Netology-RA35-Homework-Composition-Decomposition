import React from 'react';

/**
 * Компонент вывода верхней части страницы (BottomBlock):
 * - блок новостей (BottomBlockSchedule)
 * - блок рекламы
 * @function BottomBlockSchedule
 * @description компонент вывода верхней части страницы
 */
export default function BottomBlockSchedule(props) {
  return (
    <div className="bottom-block-schedule">
      <h4>Карта России</h4>
      <p>Расписания.</p>
    </div>
  );
}
