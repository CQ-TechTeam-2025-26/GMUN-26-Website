import React from "react";
import "./DelegateHandbookBox.css";
import { collapseToast } from "react-toastify";
import { color } from "framer-motion";

export default function BackgroundGuideBox({ link }) {
  return (
     <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="handbook-link"
    >
      <img
        src="/GMUN Delegate Handbook.png"
        alt="GMUN Delegate Handbook"
        className="handbook-image"
      />
    </a>
  );
}