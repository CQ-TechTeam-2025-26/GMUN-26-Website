import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [progress, setProgress] = useState(0); 
  const [phase, setPhase] = useState("loading"); // phases: "loading", "writing", "complete"
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    // 1. Enforce a minimum animation duration of 5 seconds total
    const MIN_ANIMATION_TIME = 5000; 
    const startTime = Date.now();

    // 2. Increment progress bar simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1; // Smoothly reaches 100% in ~3 seconds
      }, 30);

    // 3. Chain the sequence
    const sequenceTimer = setTimeout(() => {
      setPhase("writing"); // Triggers logo slide and text animation
      
      const finishTimer = setTimeout(() => {
        // Only set complete once the visual sequence is finished
        setPhase("complete");
      }, 2000); // Wait 2s for the text to finish writing

      return () => clearTimeout(finishTimer);
    }, 3000); // Logo finishes drawing at 3s

    // 4. Global window load listener
    const handleLoad = () => {
      const timeElapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_ANIMATION_TIME - timeElapsed);

      // Force minimum delay even if site is ready instantly
      setTimeout(() => {
        setIsPreloaderVisible(false);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(timer);
      clearTimeout(sequenceTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const logoVariants = { 
    loading: { x: 0, scale: 1 },
    writing: { x: -350, scale: 1 },
    complete: { x: -350, scale: 1 }
  };

  const writingVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.1, duration: 0.8, ease: "easeInOut" },
        opacity: { duration: 0.01, delay: i * 0.1 }
      }
    })
  };

  const textPaths = [
    "M101.345,44.345 C101.345,44.345 16.985,20.200 15.345,105.345 C38.250,171.869 83.882,150.601 95.345,138.345 C102.576,121.010 98.345,94.345 98.345,94.345 L68.345,94.345 ",
    "M152.345,151.345 L152.345,39.345 L205.345,145.345 L257.345,41.345 L259.345,148.345 ",
    "M314.345,35.345 L317.345,128.345 C317.345,128.345 358.307,174.900 387.345,124.345 L389.345,35.345 ",
    "M445.345,150.345 L445.345,42.345 L456.345,42.345 L525.345,147.345 L529.345,147.345 L528.345,34.345 ",
    "M637.345,49.345 C637.345,49.345 701.129,17.005 692.345,78.345 L636.345,139.345 L636.345,148.345 L700.345,146.345 ",
    "M770.345,37.345 C770.345,37.345 736.871,35.785 739.345,94.345 C741.819,152.905 757.750,147.986 770.345,148.345 C782.940,148.704 803.893,130.189 802.345,94.345 C800.782,58.152 794.894,38.912 770.345,37.345 ",
    "M843.345,47.345 C843.345,47.345 901.048,20.561 901.345,62.345 C901.345,62.345 898.073,88.273 845.345,139.345 C835.851,148.541 845.345,149.345 845.345,149.345 L904.345,146.345 ",
    "M1005.345,38.345 L955.345,39.345 L956.345,86.345 C956.345,86.345 1008.940,73.981 1003.345,120.345 C997.750,166.709 949.345,142.345 949.345,142.345 "
  ];})

  return (
    <AnimatePresence>
      {isPreloaderVisible && (
        <motion.div
          style={styles.container}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1 }}
        >
          <div style={styles.contentWrapper}>
            <motion.div
              variants={logoVariants}
              animate={phase}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <svg style={{ width: "600px" }} viewBox="0 0 814 684" fill="none">
                <motion.path
                  d="M394.000,0.1000..." // Paste your full original path here
                  stroke="#ffffff"
                  strokeWidth="5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 0.1 }}
                />
              </svg>
            </motion.div>

            {(phase === "writing" || phase === "complete") && (
              <svg 
                viewBox="0 0 1100 200" 
                style={styles.textSvg}
              >
                {textPaths.map((d, i) => (
                  <motion.path
                    key={i}
                    custom={i}
                    variants={writingVariants}
                    initial="hidden"
                    animate="visible"
                    d={d}
                    stroke="#ffffff"
                    strokeWidth="4"
                    fill="transparent"
                  />
                ))}
              </svg>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );


const styles = {
  container: {
    position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
    backgroundColor: "#111", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999,
  },
  contentWrapper: { display: "flex", alignItems: "center", position: "relative" },
  textSvg: { width: "600px", height: "auto", position: "absolute", left: "400px" }
};
}
export default Preloader;