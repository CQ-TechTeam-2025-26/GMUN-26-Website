import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const logoVariants = {
  loading: { x: 0, scale: 1 },
  writing: { x: -350, scale: 1 },
  complete: { x: -350, scale: 1 },
};

const writingVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.1, duration: 0.8, ease: "easeInOut" },
      opacity: { duration: 0.01, delay: i * 0.1 },
    },
  }),
};

const textPaths = [
  "M101.345,44.345 C101.345,44.345 16.985,20.200 15.345,105.345 C38.250,171.869 83.882,150.601 95.345,138.345 C102.576,121.010 98.345,94.345 98.345,94.345 L68.345,94.345 ",
  "M152.345,151.345 L152.345,39.345 L205.345,145.345 L257.345,41.345 L259.345,148.345 ",
  "M314.345,35.345 L317.345,128.345 C317.345,128.345 358.307,174.900 387.345,124.345 L389.345,35.345 ",
  "M445.345,150.345 L445.345,42.345 L456.345,42.345 L525.345,147.345 L529.345,147.345 L528.345,34.345 ",
  "M637.345,49.345 C637.345,49.345 701.129,17.005 692.345,78.345 L636.345,139.345 L636.345,148.345 L700.345,146.345 ",
  "M770.345,37.345 C770.345,37.345 736.871,35.785 739.345,94.345 C741.819,152.905 757.750,147.986 770.345,148.345 C782.940,148.704 803.893,130.189 802.345,94.345 C800.782,58.152 794.894,38.912 770.345,37.345 ",
  "M843.345,47.345 C843.345,47.345 901.048,20.561 901.345,62.345 C901.345,62.345 898.073,88.273 845.345,139.345 C835.851,148.541 845.345,149.345 845.345,149.345 L904.345,146.345 ",
  "M1005.345,38.345 L955.345,39.345 L956.345,86.345 C956.345,86.345 1008.940,73.981 1003.345,120.345 C997.750,166.709 949.345,142.345 949.345,142.345 ",
];

const baseStyles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  textSvg: {
    width: "600px",
    height: "auto",
    position: "absolute",
    left: "400px",
  },
};

const Preloader = ({ done, isHome }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // "loading", "writing", "complete"

  useEffect(() => {
    // if we already finished and remount, don't replay full animation
    if (done) {
      setProgress(100);
      setPhase("complete");
      return;
    }

    // progress 0 → 100 in ~3s
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // logo → writing → complete
    const sequenceTimer = setTimeout(() => {
      setPhase("writing");

      const finishTimer = setTimeout(() => {
        setPhase("complete");
      }, 2000);

      return () => clearTimeout(finishTimer);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(sequenceTimer);
    };
  }, [done]);

  // If not on home route, hide the overlay but keep it mounted (so it doesn't replay)
  const containerStyle = {
    ...baseStyles.container,
    display: isHome ? "flex" : "none",
    backgroundColor: done ? "transparent" : "#111",
    pointerEvents: done ? "none" : "auto",
    transition: "background-color 0.8s ease",
  };

  const contentWrapperStyle = {
    ...baseStyles.contentWrapper,
    transform: done
      ? "translate(-200px, -35vh)" // final top position
      : "translate(-200px, 0)",    // centered
    transition: "transform 0.8s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <motion.div
          variants={logoVariants}
          animate={phase}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <svg style={{ width: "600px" }} viewBox="0 0 814 684" fill="none">
            <motion.path
              d="M394.000,0.1000..." //full original logo path here
              stroke="#ffffff"
              strokeWidth="5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.1 }}
            />
          </svg>
        </motion.div>

        {(phase === "writing" || phase === "complete") && (
          <svg viewBox="0 0 1100 200" style={baseStyles.textSvg}>
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
    </div>
  );
};

export default Preloader;
