import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Hero } from "./components/Hero";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    tl.to("#loader", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: 1,
    }).set("#loader", { display: "none" });
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="bg-black">
      <div
        id="loader"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
      <Hero />
    </div>
  );
}

export default App;