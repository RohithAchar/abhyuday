import { useEffect } from "react";
import { Hero } from "./components/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 0,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper" className="bg-black">
      <div id="smooth-content">
        <Hero />
        <div className="w-screen h-screen"></div>
        <div className="w-screen h-screen"></div>
        {/* New page here dont touch above */}
      </div>
    </div>
  );
}

export default App;
