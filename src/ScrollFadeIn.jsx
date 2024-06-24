import React from 'react';
import UseIntersectionObserver from './UseIntersectionObserver';

const ScrollFadeIn = ({ children, className, ...props }) => {
  const [elementRef, isVisible] = UseIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? 'visible' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
