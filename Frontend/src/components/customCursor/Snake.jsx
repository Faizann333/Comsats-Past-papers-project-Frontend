import React, { useEffect, useRef } from 'react';

const SnakeCursor = ({ length = 15 }) => {
  const segments = useRef(
    Array.from({ length }, () => ({
      x: 0,
      y: 0,
      ref: React.createRef(),
    }))
  );

  useEffect(() => {
    const move = (e) => {
      segments.current[0].x = e.clientX;
      segments.current[0].y = e.clientY;

      for (let i = 1; i < length; i++) {
        const prev = segments.current[i - 1];
        const curr = segments.current[i];

        curr.x += (prev.x - curr.x) * 0.3;
        curr.y += (prev.y - curr.y) * 0.3;

        const el = curr.ref.current;
        if (el) {
          el.style.transform = `translate(${curr.x}px, ${curr.y}px)`;
        }
      }
    };

    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, [length]);

  return (
    <>
      {/* Hide the native cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>

      {segments.current.map((seg, idx) => (
        <div
          key={idx}
          ref={seg.ref}
          className="fixed top-0 left-0 w-2 h-2 bg-indigo-500 rounded-full opacity-80 pointer-events-none z-[9999] transition-transform duration-75"
        />
      ))}
    </>
  );
};

export default SnakeCursor;
