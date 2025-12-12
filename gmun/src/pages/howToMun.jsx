import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundGuideBox from "../components/DelegateHandbookBox";
import "./HowToMUN.css";
import VideoCard from "../components/VideoCard";

const data = [
  {
    q: "What is MUN?",
    a: `Model United Nations (MUN) is a diplomatic simulation where students represent countries and work to solve global issues through debate, negotiation, and collaborative policy writing. Delegates participate in structured discussions, caucuses, and resolution drafting that mirror real UN procedures. Beyond academics, MUN builds confidence, research skills, critical thinking, and diplomacy by letting students step into the role of global decision-makers. GMUN offers a structured space for students to practice international problem-solving while developing strong leadership and communication skills.`
  },
  {
    q: "What are key MUN terminologies?",
    a: <ul>
      <li>
        <strong>Resolution:</strong> The final actionable document drafted by delegates as a solution to the committee’s agenda.
      </li>
      <li>
        <strong>Preambulatory Clauses:</strong> Introduce context, intentions, and prior international efforts.
      </li>
      <li>
        <strong>Operative Clauses:</strong> Propose specific actions to address the issue.
      </li>
      <li>
        <strong>Position Paper:</strong> A concise document summarizing your country’s stance, background research, and proposed solutions.
      </li>
      <li>
        <strong>Lobbying:</strong> The informal negotiation period where delegates merge drafts, form alliances, and gather signatories before the resolution is formally presented.
      </li>
      <li>
        <strong>Motions:</strong> Used to control the flow of debate.
      </li>
      <li>
        <strong>Points:</strong> Allow delegates to clarify procedure or ask questions.
      </li>
      <li>
        <strong>Amendments:</strong> Enable edits and improvements to resolutions.
      </li>
      <li>
        <strong>Mastery of Terminology:</strong> Understanding these terms supports smoother debate, stronger resolution writing, and more confident committee participation.
      </li>
    </ul>

  },
  {
  q: "What is the typical flow of an MUN?",
  a: `
  - Roll Call marks the beginning of committee.
  - The agenda is set to determine the topic order.
  - Delegates enter the Speakers' List to give formal speeches on national positions.
  - Moderated Caucuses allow focused discussion on specific subtopics.
  - Unmoderated Caucuses permit free movement, collaboration, and resolution drafting.
  - Delegates negotiate wording, merge drafts, and build alliances.
  - Draft resolutions are presented to the committee.
  - Points of Information and amendments help refine the document.
  - Voting occurs either clause-by-clause or as a whole, depending on committee rules.
  `
},

  {
    q: "How do I research for my committee?",
    a: `Strong research is essential for effective MUN participation. Start by understanding your country’s foreign policy, alliances, treaties, and past actions on the topic. Analyze historical context, geopolitical and economic interests, and humanitarian factors that influence national decisions. Review UN resolutions, international agreements, NGO reports, and expert analyses. Organize your findings into background information, national stance, global positions, and potential clauses. Knowing both allies’ and opponents’ perspectives helps you negotiate, draft resolutions that gain broad support, and deliver stronger speeches and lobbying efforts.`
  },
  {
  q: "What are my responsibilities as a delegate?",
  a: `
  - Represent your assigned country’s stance accurately with professionalism and diplomacy.
  - Prepare speeches, draft resolutions, engage in lobbying, and collaborate during caucuses.
  - Respond to questions confidently and participate actively in debate.
  - Stay informed about global developments and understand geopolitical dynamics.
  - Approach discussions respectfully and practice adaptability in negotiations.
  - Know when to compromise, when to stand firm, and how to build consensus.
  - Contribute meaningfully to committee discussions and follow MUN procedure.
  - Work toward actionable and realistic solutions.
  - Successful GMUN delegates demonstrate knowledge, teamwork, leadership, and strategic thinking throughout all sessions.
  `
}

];

export default function HowToMUN() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  const handleCardClick = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  const handlePillClick = (index) => {
    setActiveIndex(index);
    const el = sectionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="howto-wrapper">
      {/* no extra dark overlay, background comes from the page itself */}
      <div className="howto-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="howto-header"
        >
          <p className="howto-badge">GMUN DELEGATE ESSENTIALS</p>
          <h1 className="howto-title">How to MUN</h1>
          <p className="howto-subtitle">
            A quick, interactive guide to help you understand the flow, research, and
            responsibilities of a delegate.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="howto-main">
          {/* Left: accordion cards */}
          <div className="howto-cards">
            {data.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={idx}
                  ref={(el) => (sectionRefs.current[idx] = el)}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className={
                    "howto-card" + (isActive ? " howto-card-active" : "")
                  }
                  onClick={() => handleCardClick(idx)}
                >
                  <div className="howto-card-inner">
                    <div
                      className={
                        "howto-card-number" +
                        (isActive ? " howto-card-number-active" : "")
                      }
                    >
                      {idx + 1}
                    </div>

                    <div className="howto-card-content">
                      <div className="howto-card-header">
                        <h2 className="howto-card-title">{item.q}</h2>
                        <motion.span
                          initial={false}
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="howto-card-toggle"
                        >
                          ▾
                        </motion.span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="howto-card-body"
                          >
                            <p className="howto-card-text">{item.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: ONLY Background Guide & Handbook box */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="howto-sidebar"
          >
            <div className="howto-box howto-brochure-box">
              <h4 className="howto-box-title">Background Guide &amp; Handbook</h4>
              <p className="howto-box-text">
                For deeper procedures, format rules, and advanced tips, refer to the
                official GMUN background guide.
              </p>
              <div className="howto-brochure">
                <BackgroundGuideBox link="https://www.canva.com/design/DAGbOepToVo/54kVE01-QsrXxBhgB0pppg/edit" />
              </div>
            </div>
          </motion.aside>
        </div>

        {/* === VIDEO TRAINING SECTION === */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="howto-videos-section"
        >
          <h2 className="howto-videos-title">Training Videos</h2>

          <div className="howto-videos-grid">
            <VideoCard
              link="https://youtu.be/xZGhU6P3Dcc?si=BTYBWc92TEr0DMZe"
              title="What is Model United Nations?"
            />
            <VideoCard
              link="https://youtu.be/RPOFlQfwWVE?si=cdlXPXQUGbN8_w9x"
              title="Participating in a MUN Conference"
            />
            <VideoCard
              link="https://youtu.be/DQqOWmVSasE?si=4s_nsWQUCWWyUCWP"
              title="Flow of Debate"
            />
            <VideoCard
              link="https://youtu.be/7sQQAKghwhs?si=Mh0EZ60bCXSmre6X"
              title="Points & Motions in MUN"
            />
            <VideoCard
              link="https://youtu.be/ukocFZ2MyDI?si=3q6ZrudGQo5mbW5g"
              title="How To Research"
            />
            <VideoCard
              link="https://youtu.be/8NwN1NiIDdI?si=pabTHhdeBuDpV78e"
              title="Moderated Caucus"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
