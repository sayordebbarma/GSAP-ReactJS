import React, { useRef } from "react";
import { gsap } from "gsap";

const StringAnimation = () => {
  const pathRef = useRef(null);

  const initialPath = "M 100 200 Q 500 200 900 200";

  const handleMouseMove = (e) => {
    const newPath = `M 100 200 Q ${e.nativeEvent.offsetX} ${e.nativeEvent.offsetY} 900 200`;

    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pathRef.current, {
      attr: { d: initialPath },
      duration: 1.5,
      ease: "elastic.out(1, 0.2)",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ background: "black" }}
    >
      <svg width="1000" height="400">
        <path ref={pathRef} d={initialPath} stroke="white" fill="transparent" />
      </svg>
    </div>
  );
};

export default StringAnimation;
