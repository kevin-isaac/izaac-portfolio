import React, { useState, useEffect, useRef } from 'react';
 

const SlideInComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when the component is in the viewport
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the element is in view
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`slide-in-component ${isVisible ? 'slide-in' : ''}`}
    >
      {children}
    </div>
  );
};

export default SlideInComponent;



