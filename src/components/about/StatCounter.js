"use client";

import { useEffect, useRef } from 'react';

export default function StatCounter({ target, duration = 2000 }) {
  const countRef = useRef(null);
  const observerRef = useRef(null);
  
  useEffect(() => {
    const counter = countRef.current;
    
    // Function to animate counting up
    const animateCount = () => {
      const count = +counter.getAttribute('data-target');
      const startTime = Date.now();
      const startValue = 0;
      
      const updateCount = () => {
        const currentTime = Date.now();
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const currentValue = Math.floor(progress * (count - startValue) + startValue);
        counter.textContent = currentValue;
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = count;
        }
      };
      
      requestAnimationFrame(updateCount);
    };
    
    // Use IntersectionObserver to start animation when in view
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCount();
        observerRef.current.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (counter) {
      observerRef.current.observe(counter);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [duration]);
  
  return (
    <span 
      className="counter" 
      ref={countRef} 
      data-target={target}
    >
      0
    </span>
  );
} 