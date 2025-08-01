import React, { useEffect, useState } from 'react';
import truckImg from '../../assets/floting/img.webp';

const FloatingTruck = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 }); 

  useEffect(() => {
    let rafId = null;
    let target = { x: 0, y: 0 };
    const ease = 0.50; 

    const handleMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const animate = () => {
      setPos((prev) => {
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>

      <img
        src={truckImg}
        alt="truck"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px', 
          height: 'auto',
          pointerEvents: 'none', 
          transform: `translate(${pos.x - 30}px, ${pos.y - 30}px)`, 
          transition: 'transform 0.1s ease-out',
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default FloatingTruck;
