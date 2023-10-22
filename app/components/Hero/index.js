import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin
import Image from "next/image";

import styles from "./Hero.module.scss";
import { animateTitle, animateImage, revealMenu } from "./animations";

gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin

const Hero = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(revealMenu(), 0).add(animateImage(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    console.log("Scrolling to section:", sectionId);
    gsap.to(window, {
      duration: 1.5,
      scrollTo: `#${sectionId}`,
      ease: "power4.inOut",
    });
  };

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.hero__top}>
        <div
          data-menu-item
          data-hidden
          onClick={() => scrollToSection("about")} // Scroll to "about" section
          onMouseEnter={() => setActiveSection("about")}
          onMouseLeave={() => setActiveSection(null)}
          className={activeSection === "about" ? styles.activeSection : ""}
        >
          <span>
            <h3>Brian . Orinda</h3>
          </span>
        </div>
        <span
          data-menu-item
          data-hidden
          onClick={() => scrollToSection("about")} // Scroll to "about" section
        >
          about
        </span>
        <span
          data-menu-item
          data-hidden
          onClick={() => scrollToSection("contact")} // Scroll to "contact" section
          onMouseEnter={() => setActiveSection("contact")}
          onMouseLeave={() => setActiveSection(null)}
          className={activeSection === "contact" ? styles.activeSection : ""}
        >
          contact
        </span>
      </div>

      <h1 className={styles.hero__title}>
        <span data-hidden data-title-first>
          Brian .Orinda
        </span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-hidden data-title-last>
          Portfolio
        </span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
          data-image
          src="/images/photography.jpg"
          width={1728}
          height={650}
        
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;
