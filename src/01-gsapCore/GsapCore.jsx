import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapCore() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
    });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto h-25 w-25 bg-blue-500" ref={boxRef}>
        Animate Me
      </div>
    </div>
  );
}
