import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none';

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(e.target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div 
        className={`fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(0,245,212,0.8)] ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </>
  );
};

export default CustomCursor;
