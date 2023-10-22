import { gsap } from 'gsap';

export const animateImages = (imageRefs) => {
  const tl = gsap.timeline();

  imageRefs.current.forEach((image, index) => {
    tl.from(image, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power2.inOut',
      delay: index * 0.2,
    });
  });
};

export const handleImageHover = (index, imageRefs) => {
  gsap.to(imageRefs.current[index], {
    backgroundColor: 'pink',
  });
};

export const handleImageLeave = (index, imageRefs) => {
  gsap.to(imageRefs.current[index], {
    backgroundColor: 'transparent',
  });
};
