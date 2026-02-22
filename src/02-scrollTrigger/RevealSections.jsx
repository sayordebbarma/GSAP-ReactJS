import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealSections = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
      }).to(".hero-title", {
        scale: 1.5,
      });

      gsap.utils.toArray(".section").forEach((section) => {
        gsap.from(section, {
          y: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={container} className="min-h-screen bg-black text-white">
      <section className="hero flex h-screen items-center justify-center bg-purple-700">
        <h1 className="hero-title text-5xl font-bold">ScrollTrigger React</h1>
      </section>

      <section className="section flex h-screen items-center justify-center bg-gray-800 text-4xl">
        Section 1
      </section>

      <section className="section flex h-screen items-center justify-center bg-gray-700 text-4xl">
        Section 2
      </section>

      <section className="section flex h-screen items-center justify-center bg-gray-600 text-4xl">
        Section 3
      </section>
    </div>
  );
};

export default RevealSections;
