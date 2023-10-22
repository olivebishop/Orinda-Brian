"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Project from "@/components/Project/Project";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import About from "./components/About/About";

const Home = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>
      {loaderFinished ? (
        <>
          <Hero />
          <Project /> {/* Display Project component below Hero */}
          <About /> {/* Display Contact component below Project */}
          <Footer /> {/* Display Footer component at the end */}
        </>
      ) : (
        <Loader timeline={timeline} />
      )}
    </main>
  );
};

export default Home;
