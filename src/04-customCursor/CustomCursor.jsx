import { useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
    });
  };

  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 2,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  return (
    <div
      className='bg-blue-900 min-h-screen w-full cursor-none'
      onMouseMove={handleMouseMove}
    >
      {/* Cursor */}
      <div
        ref={cursorRef}
        className='w-5 h-5 bg-white rounded-full fixed top-0 left-0 pointer-events-none'
      ></div>

      {/* Box */}
      <div className='flex justify-center items-center gap-24 min-h-screen'>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='w-96 h-96 bg-fuchsia-400 rounded-2xl'
        ></div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='w-96 h-96 bg-yellow-400 rounded-2xl'
        ></div>
      </div>
    </div>
  );
};

export default CustomCursor;
