import { useEffect } from "react";
import type { ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // cast options to any to avoid TS errors
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    } as any);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.scrollTo(0, { duration: 0 });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", () => ScrollTrigger.update());

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value?: number) {
        return arguments.length ? lenis.scrollTo(value!) : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "transform",
    });

    ScrollTrigger.addEventListener("refresh", () => {});

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", () => {});
    };
  }, []);

  return <>{children}</>;
}
