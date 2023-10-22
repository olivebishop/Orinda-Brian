import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from "./Project.module.css"; // Import your CSS module
import { animateImages, handleImageHover, handleImageLeave } from "./animations";

const Projects = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    animateImages(imageRefs);
  }, []);

  return (
    <section className={styles.projects}>
      {imageRefs.current.map((_, index) => (
        <div
          className={styles.project}
          key={index}
          onMouseEnter={() => handleImageHover(index, imageRefs)}
          onMouseLeave={() => handleImageLeave(index, imageRefs)}
        >
          <img
            ref={(el) => (imageRefs.current[index] = el)}
            src={`/images/project${index + 1}.jpg`}
            alt={`Project ${index + 1}`}
          />
        </div>
      ))}
    </section>
  );
};

export default Projects;
