import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const leftTreesRef = useRef(null);
  const rightTreesRef = useRef(null);
  const kidsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1500",
          pin: true,
          scrub: true,
        },
      });

      tl.to(
        bgRef.current,
        {
          filter: "blur(6px)",
          scale: 1.05,
        },
        0,
      )

        .to(
          leftTreesRef.current,
          {
            x: -150, // move left
            filter: "blur(6px)",
          },
          0,
        )

        .to(
          rightTreesRef.current,
          {
            x: 150, // move right
            filter: "blur(6px)",
          },
          0,
        )
        .to(
          kidsRef.current,
          {
            y: -100,
            scale: 2,
          },
          0,
        );
    });

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative w-screen h-screen overflow-hidden">
      <img
        ref={bgRef}
        src="/strange-bg-sans-trees.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        ref={leftTreesRef}
        src="/trees-left.png"
        alt="Trees left"
        style={{ height: "100%", width: "auto", maxWidth: "none" }}
        className="absolute top-0 left-0 ml-[-750px] sm:ml-[-700px] md:ml-[-650px] lg:ml-[-600px] xl:ml-[-500px] 2xl:ml-[-350px] 3xl:ml-[-350px]"
      />
      <img
        ref={rightTreesRef}
        src="/trees-right.png"
        alt="Trees right"
        style={{ height: "100%", width: "auto", maxWidth: "none" }}
        className="absolute top-0 right-0 mr-[-750px] sm:mr-[-700px] md:mr-[-650px] lg:mr-[-600px] xl:mr-[-500px] 2xl:mr-[-350px] 3xl:mr-[-350px]"
      />
      <img
        ref={kidsRef}
        src="/strange-kids.png"
        alt="Kids"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-120 min-w-[1200px]"
      />
    </div>
  );
};
