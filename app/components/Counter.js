"use client";
import React, { useEffect, useState, useRef } from 'react';

function Counter({ data }) {
  const { label, value, duration } = data;

  const [count, setCount] = useState("0");
  const [isInViewport, setIsInViewport] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
          } else {
            setIsInViewport(false);
          }
        });
      },
      { threshold: 0 } // Trigger when any part of the element is in view
    );

    observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.substring(0, 3));
    if (!isInViewport || start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + value.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // Reset count when component goes out of view
    return () => {
      clearInterval(timer);
      setCount("0");
    };
  }, [isInViewport, value, duration]);

  useEffect(() => {
    const handleScroll = () => {
      setIsInViewport((prevIsInViewport) => {
        const rect = counterRef.current.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <li className="counters__list" ref={counterRef}>
      <h2 className='font-amadeus-bold fs-1'> {'+' + count}</h2>
      {label && <small>{label}</small>}
    </li>
  );
}

export default Counter;
