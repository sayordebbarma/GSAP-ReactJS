import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CircleAnimation = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    const length = circle.getTotalLength();

    gsap.set(circle, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(circle, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.out",
    });
  }, []);

  return (
    <svg width="100" height="100">
      <circle
        ref={circleRef}
        cx="50"
        cy="50"
        r="40"
        stroke="white"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
};

export default CircleAnimation;
