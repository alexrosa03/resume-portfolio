"use client"; // optional, good practice for Next.js 13+

import { useEffect, useRef, useState } from "react";
import styles from "./SlideInSection.module.css";

export default function SlideInSection({ children, direction }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${styles.slideIn} ${styles[direction]} ${isVisible ? styles.active : ''}`}
    >
  {children}
</div>

  );
}