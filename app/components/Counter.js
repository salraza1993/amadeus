"use client";
import React, { useEffect, useState } from 'react';

function Counter({ data }) {
  const { labelBefore, labelAfter, plusSymbol, number, duration } = data;

  // number displayed by component
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    // if zero, return
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return <li className="counters__list">
    {labelBefore  && <small>{labelBefore}</small>}
    <h2 className='font-amadeus-bold fs-1'>{plusSymbol && '+'} {count}</h2>
    {labelAfter &&  <small>{labelAfter}</small>}
  </li>;
}

export default Counter;