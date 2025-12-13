import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

/* ------------------ OurStory component with animate -> release flow ------------------ */
const governors = [
  "Arya Dubey",
  "Atharva Deshmukh",
  "Divyansh Jain",
  "Pritvik Premkumar Shanmuga",
  "Sourav Upadhayay",
  "Sritoma Nandan",
  "Tejal Saurabhi",
];
const secretaries = [

  "Anshuman Singh",
  "Anusha Baheti",
  "Anushka Jain",
  "Avani Dandawate",
  "Bethina Sri Sathwika",
  "Chaitanya Ghuge",
  "Chirag Patil",
  "Dhruv Narware",
  "Divyansh Joshi",
  "Gaurav Gupta",
  "Harshal Patil",

  "Hridyansh Singh",
  "Ishan Sekhar",
  "Kartik Patil",
  "Khushank Chandela",
  "Krishna Pasi",
  "Maadhav Goel",
  "Mugdha Jha",
  "Niraj Borole",
  "Pradyumna",
  "Pratham Sharma",
  "Priyansu Dash",
  "Rishika Ghodki",
  "Samiya Singhal",
  "Sarthak Yadav",
  "Shashwat Warune",
  "Siddhant Chavda",
  "Sneha Makharia",
  "Tanush Badonia",
  "Tarun Achari",
  // add as many as you want
];

export default function OurStory() {
  const imgSrc = "/group.jpg"; // update to your image path or import



  return (
    <div
      className="page-bg"
      style={{
        color: "#f3f6f7ff",
        minHeight: "100vh",
        paddingBottom: "120px"
      }}
    >



      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400&display=swap');
:root{
  --text: #F6F3EE;       /* main text */
  --muted: #cfc9c6;     /* secondary text */
  --accent: #E7B65C;    /* accent */
  --glass-bg: rgba(177, 162, 162, 0.06);
  --glass-border: rgba(255,255,255,0.08);
  --dark-overlay: rgba(6,12,14,0.36); /* overlay to increase contrast */
}

/* ---------------- PAGE GLASS WRAPPER ---------------- */
.page-bg {
  position: relative;
  min-height: 100vh;
  /* If the background image is set on body, this still works.
     If not, you can set the image here using background-image: url('/path') */
  z-index: 0;
  color: var(--text);
}

/* the core glass: translucent panel + blur of background behind it */
.page-bg::before{
  content: "";
  position: absolute;
  inset: 0;
  /* translucent fill to allow background to show through */
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02));
  /* optional darker overlay to improve contrast (keeps texture but darkens) */
  box-shadow: inset 0 120px 220px rgba(0,0,0,0.12);
  z-index: 0;
  pointer-events: none;
}

/* The frosted effect for content wrapper (the actual glass card).
   This sits above ::before and blurs the page background behind it. */
.container {
  position: relative;
  z-index: 1;
  max-width: 980px;
  margin: 48px auto 80px;
  padding: 48px 40px 96px;
  text-align: center;

  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
  border: 1px solid var(--glass-border);
  border-radius: 16px;

  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);

  box-shadow: 0 18px 50px rgba(2,6,8,0.32);
  overflow: visible;
  height: auto;
}

/* Typography + helpers */
.since { letter-spacing: 6px; font-size: 50px; margin-top: 6px; color: #ffffffff; }

.title { font-family: 'Playfair Display', serif; font-weight: 700; color: #05290cff; font-size: 130px; line-height: 0.82; margin: 18px 0 6px; }
.subtitle { font-size: 40px; letter-spacing: 1px; margin-top: 30px; margin-bottom: 40px; color:#ffffffff; font-family: Poppins (sans) ;}

/* IMAGE WRAP (keep as-is, sits inside frosted container) */
.image-wrap { width: 700px; height: 260px; margin: 28px auto 14px; border-radius: 14px; overflow: hidden; box-shadow: 0 14px 35px rgba(0,0,0,0.12); position: relative; }
.image-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* ---------------- LEAD (glass paragraph) ---------------- */
.lead {
  width: 100%;
  max-width: 85ch;
  margin: 32px auto 0;
  padding: 22px 26px;
  font-size: 18px;
  line-height: 1.75;
  color: #0c2205ff;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;


  

  position: relative;
  z-index: 2; /* above container overlay */
}

/* ---------------- QUOTE (convert to frosted card too) ---------------- */
.quote-section { background: transparent; display: flex; justify-content: center; align-items: center; padding: 80px 20px; z-index:1; }
.quote-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);
  padding: 48px 40px;
  border-radius: 14px;
  max-width: 1100px;
  text-align: center;
  box-shadow: 0 18px 40px rgba(2,6,8,0.32);
  color: #ffff;
}
.quote-text { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 500; color: var(--text); margin-bottom: 24px; line-height: 1.3; text-shadow: 0 6px 18px rgba(2,6,8,0.45); }
.quote-author { font-family: 'Poppins', sans-serif; font-size: 18px; color: #0d350bff; opacity: 0.95; }

/* ---------------- CAROUSEL SLIDE COPY (frosted darker panel for contrast) ---------------- */
.oe-slide-copy {
  background: rgba(3,6,8,0.56); /* dark translucent to maximize readability */
  color: #f7f3ee;
  padding: 24px;
  border-radius: 12px;
  width: 420px;
  box-shadow: 0 14px 40px rgba(2,6,8,0.46);
  border: 1px solid rgba(255,255,255,0.04);
}
.oe-slide-heading { margin: 0 0 10px; font-size: 20px; color: #ffd79a; }
.oe-slide-text { margin: 0; color: #f1ebe6; line-height: 1.6; }

/* ---------------- TEAM SECTION (make frosted & readable) ---------------- */
.team-section {
  padding: 4rem 6vw 5rem;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  color: var(--text);
  font-family: "Poppins", system-ui, sans-serif;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.02);
}

/* governor gradient text OK — add tiny shadow for small screens */
.governor-name { background: linear-gradient(90deg,#ffe3b8,#f8d6ff); -webkit-background-clip: text; color: transparent; text-shadow: 0 2px 8px rgba(0,0,0,0.24); }

/* secretaries list readable color */
.secretary-name { color: var(--text); }

/* ---------------- RESPONSIVE ---------------- */
@media (max-width: 900px) {
  .title { font-size: 64px; }
  .image-wrap { width: 260px; height: 220px; }
  .oe-slide-img { width: 260px; height: 260px; }
  .container { padding: 32px; margin: 28px 12px 60px; border-radius: 12px; }
}

 /* ------------ RESPONSIVE FIXES FOR OUR STORY SECTION -------------- */

/* Large screens (default) are fine, so we start reducing at 1200px */
@media (max-width: 1200px) {
  .title {
    font-size: 90px;
    line-height: 0.9;
  }
  .subtitle {
    font-size: 32px;
  }
  .image-wrap {
    width: 540px;
    height: 240px;
  }
  .lead {
    font-size: 17px;
  }
}

/* Tablets */
@media (max-width: 900px) {
  .container {
    padding: 32px 24px 60px;
    margin: 20px 18px;
  }

  .since {
    font-size: 36px;
    letter-spacing: 4px;
  }

  .title {
    font-size: 56px;
  }

  .subtitle {
    font-size: 24px;
    margin-bottom: 26px;
  }

  .image-wrap {
    width: 100%;
    height: 200px;
  }

  .lead {
    font-size: 16px;
    line-height: 1.6;
    padding: 16px;
  }
}

/* Phones */
@media (max-width: 600px) {
  .container {
    padding: 24px 18px 50px;
  }

  .since {
    font-size: 28px;
    letter-spacing: 3px;
  }

  .title {
    font-size: 38px;
    line-height: 1;
  }

  .subtitle {
    font-size: 18px;
  }

  .image-wrap {
    width: 100%;
    height: 180px;
  }

  .lead {
    font-size: 15px;
    line-height: 1.55;
    padding: 12px;
  }
}

/* Extra-small phones */
@media (max-width: 400px) {
  .title {
    font-size: 32px;
  }

  .subtitle {
    font-size: 16px;
  }

  .lead {
    font-size: 14px;
  }
}



      `}</style>

      <div className="container">
        <motion.div
          className="since text-xl tracking-widest mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          SINCE 2006
        </motion.div>
        {/* MAIN TITLE */}
        <motion.h1
          className="title text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl"
          initial={{ opacity: 0, y: -60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          // style={{
          // backgroundImage:
          // "linear-gradient(90deg, #e0c3fc, #8ec5fc, #a18cd1)",
          // backgroundSize: "200% 200%",
          // WebkitBackgroundClip: "text",
          // color: "transparent",
          // }}
          >
            Our Legacy
          </motion.span>
        </motion.h1>


        {/* SUBTITLE */}
        <motion.div
          className="subtitle text-lg md:text-xl tracking-widest mb-10 text-white/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          SHAPING CONFIDENT LEADERS
        </motion.div>

        {/* STATIC IMAGE */}
        <motion.div
          className="image-wrap mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src={imgSrc}
            alt="communique group"
            className="rounded-xl shadow-2xl w-full max-w-3xl"
          />
        </motion.div>

        <motion.p
          className="lead text-lg md:text-xl max-w-5xl leading-8 text-white/90 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The journey of GMUN and the soft-skills society Communiqué at IIT Kharagpur
          share a common thread of continuous growth. GMUN has evolved from a small
          initiative into a premier national event, expanding yearly by tackling
          complex global issues and enhancing the delegate experience. Over the past
          decade, Communiqué has become the official personality development body,
          running intensive programs like the Placement Bootcamp and Internship
          Training Week, which utilize industry panels and mock interviews to build
          student confidence, communication, and practical career skills. GMUN
          (Global Model United Nations), the flagship diplomatic simulation
          conference of IIT Kharagpur, is an initiative driven by Communiqué — the
          official Soft Skills and Personality Development Society of IIT Kharagpur.
          Together, we are united by a shared mission: to empower students with
          confidence, leadership, diplomacy, and real-world professional skills. What
          began as a modest initiative has now grown into one of India’s premier
          national MUN conferences, drawing hundreds of delegates from across the
          country each year. GMUN continues to evolve by addressing complex global
          issues, delivering high-quality committee experiences, and fostering
          meaningful debate, collaboration, and leadership.
        </motion.p>

        {/* the OurJourney section follows and will be reachable after release */}
        {/* <OurJourney /> */}
        <OurEvents />
        <OurTeam />
        <QuoteBlock />
      </div>
    </div>
  );
}
/* -------- Carousel (unchanged logic) -------- */
function Carousel({ id, title, description, slides }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (document.activeElement && document.activeElement.tagName === "INPUT") return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const go = (i) => setIndex(i);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    const diff = (touchStartX.current || 0) - (endX || 0);
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <motion.section
      aria-labelledby={id + "-title"}
      className="oe-carousel-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Title Animation */}
      <motion.h3
        id={id + "-title"}
        className="oe-carousel-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {title}
      </motion.h3>

      {/* Description Animation */}
      <motion.p
        className="oe-carousel-description"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Carousel Animation */}
      <motion.div
        className="oe-carousel"
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Left Arrow */}
        <motion.button
          className="oe-arrow oe-arrow-left"
          onClick={prev}
          aria-label={`Previous ${title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          ‹
        </motion.button>

        {/* Slides */}
        <div className="oe-viewport" role="list">
          <AnimatePresence mode="wait">
            <motion.article
              key={slides[index].id}
              role="listitem"
              className="oe-slide active"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="oe-slide-card"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.img
                  src={slides[index].image}
                  alt={slides[index].title}
                  className="oe-slide-img"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="oe-slide-copy">
                  <motion.h4
                    className="oe-slide-heading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slides[index].title}
                  </motion.h4>

                  <motion.p
                    className="oe-slide-text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slides[index].text}
                  </motion.p>
                </div>
              </motion.div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <motion.button
          className="oe-arrow oe-arrow-right"
          onClick={next}
          aria-label={`Next ${title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          ›
        </motion.button>
      </motion.div>

      {/* Dots */}
      <motion.div
        className="oe-dots"
        role="tablist"
        aria-label={`${title} slides`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {slides.map((_, i) => (
          <motion.button
            key={i}
            className={`oe-dot ${i === index ? "active" : ""}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
            aria-selected={i === index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

/* ---------------- OurEvents (vertical stack + palette) ---------------- */
function OurEvents() {
  const itwSlides = [
    { id: "itw-1", image: "/events/itw-1.jpg", title: "Panel: Analytics & Data", text: "Industry experts shared data-case strategies and how to prepare for analytics interviews." },
    { id: "itw-2", image: "/events/itw-2.jpg", title: "Workshop: Software Hiring", text: "Hands-on sessions on system design, interviewing and resume building for software roles." },
    { id: "itw-3", image: "/events/itw-3.jpg", title: "Session: Finance Profiles", text: "Overview of finance recruitments and mock rounds to help students sharpen their profiles." },
  ];

  const bootcampSlides = [
    { id: "boot-1", image: "/product.jpg", title: "Product Profile", text: "The Placement Bootcamp begins with a deep dive into the Product profile. Panelists Anushka Singh, Subhayan Dey, and Gautam Jaju shared insights on product preparation, case frameworks, and strategies to excel in product interviews." },
    {
      id: "boot-2", image: "finance.jpg", title: "Finance Profile",
      text: "The Finance session of our Placement Bootcamp featured insights from Vaibhav Maheshwari (BlackRock) and Lakshya Jindal (DSP Mutual Funds). Both panelists shared their journeys into high-impact finance roles, and interview mindsets required for the industry.They addressed common questions about finance recruitments, and offered practical guidance, and presenting reasoning during interviews."
    },
    {
      id: "boot-3", image: "core.jpg", title: "Core Profile",
      text: "The Core session of our Placement Bootcamp brought together insights from Yash Agarwal (Texas Instruments), Nikhil Kandregula (Optym) and Srijan Agrawal (Sedemac). This session helped participants gain a real understanding of the core placement landscape and how to prepare effectively."
    },
    {
      id: "boot-4", image: "data.jpg", title: "Data Profile",
      text: "The Data session of our Placement Bootcamp featured insights from Suraj Gupta (American Express), Aaditya Shah (HSBC) and Mritunjay Agrahari (Americana Restaurants). This session provided a clear roadmap for students aspiring to break into data-driven roles and excel in analytical interviews."
    },
    {
      id: "boot-5", image: "sde.jpg", title: "SDE & Quant Profile",
      text: "The SDE & Quant session of our Placement Bootcamp featured an accomplished panel: Harshith Chowdary (D.E. Shaw & Co.), Mayukha Marla (Databricks), Pranav Nyati (Graviton) and Abhinav Cillanki (Stripe)."
    },
  ]
  return (
    <section className="oe-section">
      <style>{`
        /* palette */
        :root{
          --bg: #f6e7e5;
          --brand: #13433fff;
          --muted: #6b6666;
          --accent: rgba(19, 67, 63, 1);
          --card-dark: #13433fff;
        }

        .oe-section {
          background: transparent;
          padding: 88px 0;
          box-sizing: border-box;
          color: var(--muted);
          display: flex; 
          justify-content: center;  
        }

        .oe-wrap { max-width: 1100px; margin: 0 auto;  padding: 0 20px;  }

        .oe-header {  text-align: center;
  margin-bottom: 36px;

  /* 🔽 new lines */
  max-width: 900px;        /* same as carousel max-width */
  margin-left: auto;
  margin-right: auto;      /* centers the whole header block */
 }
        .oe-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 65px;
          margin: 0 0 8px;
          color: #05290cff;
        }
        .oe-header p { color: #0a0a0aff; max-width: 100% ; margin: 0 auto; font-size: 20px }

        /* vertical stack: ITW first, Bootcamp below */
        .oe-grid {
          display: grid;
          grid-template-columns: 1fr; /* single column always */
          gap: 64px;
          margin-top: 48px;
          align-items: start;
        }

        .oe-carousel-section { padding: 12px 20px; box-sizing: border-box; text-align: center;}

        .oe-carousel-title {
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 60px;
          font-weight: 600;
          margin: 0 0 18px;
          color: #05290cff;
        }

        .oe-carousel { display: flex; align-items: center; justify-content: center; gap: 12px; position: relative; margin: 0 auto;  width: 100%;
  max-width: 900px;    }

        .oe-arrow {
          width: 52px; height: 52px; border-radius: 4px; background: transparent;
          border: 2px solid rgba(19,67,63,0.06); color: var(--accent); font-size: 28px;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }

        .oe-viewport { flex: 0 0 auto; overflow: hidden; justify-content: center;}

        .oe-slide { display: none; padding: 8px; box-sizing: border-box; }
        .oe-slide.active { display: block; }

        .oe-slide-card { display: flex; gap: 20px; align-items: stretch; justify-content: center; }

        .oe-slide-img {
          width: 340px; height: 340px; object-fit: cover; border-radius: 12px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .oe-slide-copy {
          background: var(--card-dark);
          color:var(--muted) ;
          padding: 28px;
          border-radius: 12px;
          width: 420px;
          box-shadow: 0 14px 40px rgba(0,0,0,0.12);
        }
        .oe-slide-heading { margin: 0 0 10px; font-size: 20px; color: #e79d1fff; }
        .oe-slide-text { margin: 0; color: #e7e7e7; line-height: 1.6; }

        .oe-dots { margin-top: 18px; display: flex; gap: 10px; justify-content: center; }
        .oe-dot { width: 10px; height: 10px; background: rgba(43,124,255,0.15); border-radius: 50%; border: none; cursor: pointer; }
        .oe-dot.active { background: var(--accent); box-shadow: 0 4px 10px rgba(43,124,255,0.14); }

        @media (max-width: 720px) {
          .oe-slide-card { flex-direction: column; align-items: center; }
          .oe-slide-img { width: 260px; height: 260px; }
          .oe-slide-copy { width: 100%; }
          .oe-arrow { display: none; }
        }
          .oe-carousel-description {
  font-size: 20px;
  color: #ffff;
  margin: -6px 0 28px;
  line-height: 1.7;
  max-width: ;
  text-align: left;
  font-weight: 400;
  opacity: 1;
}
 


      `}</style>

      <div className="oe-wrap">
        <header className="oe-header">
          <h2>OUR EVENTS</h2>
          <p>Explore our flagship events that help students build confidence, practical skills and career readiness.</p>
        </header>

        <div className="oe-grid">
          {/* Internship Training Week first */}
          <Carousel id="itw" title="CDC Internship Week" description="Internships are the first step of an engineer in the corporate world. This step comes with many doubts. To equip our fellow KGPians with the proper knowledge from the people who have aced in their respective domain, we organized the CDC Internship Week covering Analytics, Software, Core, Finance and FMCG profiles." slides={itwSlides} />

          {/* Placement Bootcamp below it */}
          <Carousel id="boot" title="Placement Bootcamp" description="To help final year students, Communiqué organized the all-in-one Placement Bootcamp covering Analytics, Software, Core, Finance, FMCG, and Product profiles. The main motive of this session was to clear doubts about the selection procedures of top companies and get some valuable tips and tricks to ace the selection rounds" slides={bootcampSlides} />
        </div>
      </div>
    </section>
  );
}

function QuoteBlock() {
  return (
    <section className="quote-section">
      <motion.div
        className="quote-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.p
          className="quote-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          “Communication is not the art of speaking — it is the courage to express.”
        </motion.p>

        <motion.p
          className="quote-author"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          Communiqué Team <br />
          IIT Kharagpur
        </motion.p>
      </motion.div>
    </section>
  );
}
/* ------------------ OUR TEAM SECTION ------------------ */
function OurTeam() {
  return (
    <>
      <style>
        {`
/* TEAM SECTION – CLEAN, CONTRASTED, READABLE ON YOUR BACKGROUND */

.team-section {
  padding: 4rem 6vw 5rem;
  background: transparent;
  color: #f6f3ee;                        /* soft warm white for dark bg */
  font-family: "Poppins", sans-serif;    /* readable body font */
  text-align: center;
}

/* MAIN HEADING */
.team-heading {
  font-family: "Playfair Display", serif;
  font-size: clamp(2.6rem, 4vw, 3.4rem);
  letter-spacing: 0.12em;                /* FIXED (was empty before) */
  margin-bottom: 3rem;
  text-transform: uppercase;
  color: #fefcf8;                        /* brighter heading color */
  text-shadow: 0 4px 14px rgba(0,0,0,0.45); /* adds contrast on bg */
}

/* BLOCK WRAPPER */
.team-block {
  max-width: 1000px;
  margin: 0 auto 3.2rem;
}

/* LABELS (Governors / Secretaries) */
.team-label {
  display: inline-block;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin-bottom: 1.5rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(255,255,255,0.5);
  color: #fefaf5;
  opacity: 0.9;
}

.governors-label {
  border-color: rgba(255, 225, 190, 0.9);
}

/* MEMBER ROWS */
.governor-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem 2rem;
  margin: 0 auto;
}

/* GOVERNOR NAME – HIGH CONTRAST + ELEGANT */
.governor-name {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.03em;

  /* readable gold gradient */
  background: linear-gradient(90deg, #ffe8c6, #f2c57a);
  -webkit-background-clip: text;
  color: transparent;
  
  cursor: default;
  text-shadow: 0 2px 10px rgba(0,0,0,0.35);
}

/* DOT COLOR */
.governor-name .dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: radial-gradient(circle, #ffe3b8, #f4b96e);
}

/* SECRETARIES LIST */
.secretary-list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 900px;
  column-count: 3;
  column-gap: 3rem;
  text-align: left;
}

/* RESPONSIVE COLUMNS */
@media (max-width: 900px) { .secretary-list { column-count: 2; } }
@media (max-width: 600px) { .secretary-list { column-count: 1; } }

/* SECRETARY NAME */
.secretary-name {
  padding: 0.2rem 0 0.2rem 1.1rem;
  font-size: 1rem;
  letter-spacing: 0.02em;
  position: relative;
  color: #f3ede5;                     /* soft white */
  opacity: 0.9;
  break-inside: avoid;
}

/* DOT BEFORE SECRETARY */
.secretary-name::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.65rem;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(250, 222, 196, 0.9);
}





        `}
      </style>

      <section className="team-section">

        {/* ⭐ TITLE ANIMATION — EPIC FADE + LETTER SPACING EXPAND */}
        <motion.h2
          className="team-heading"
          initial={{ opacity: 0, letterSpacing: "0.4em", y: 30 }}
          whileInView={{ opacity: 1, letterSpacing: "0.12em", y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          OUR TEAM
        </motion.h2>

        {/* 🌟 GOVERNORS BLOCK */}
        <motion.div
          className="team-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="team-label governors-label">Governors</div>

          <motion.div
            className="governor-row"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {governors.map((name) => (
              <motion.span
                key={name}
                className="governor-name"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="dot" />
                {name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* 🌈 SECRETARIES BLOCK */}
        <motion.div
          className="team-block"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="team-label">Secretaries</div>

          <motion.ul
            className="secretary-list"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {secretaries.map((name) => (
              <motion.li
                key={name}
                className="secretary-name"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ x: 6 }}
              >
                {name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    </>
  );
}
