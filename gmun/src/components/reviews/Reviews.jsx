import { motion } from "framer-motion";
import "./styles.css";
import { useState } from "react";

const ReviewsData = [
  {
    id: 0,
    name: "Jinansh Dalal, UNSC",
    avatar: "./home-reviews/placeholder-avatar.png",
    review:
      "Representing Afghanistan in UNSC as a first-time GMUN participant was incredible. The EB explained everything clearly, making the experience enriching. The recognition from international bodies made it even more special.",
  },
  {
    id: 1,
    name: "Sarthak Yadav, UNHRC",
    avatar: "./home-reviews/placeholder-avatar.png",
    review:
      "One of the best MUNs I've attended! The committee was supportive and created a great space for collaboration. I had an amazing experience and can't wait for the next edition.",
  },
  {
    id: 2,
    name: "Manav Sanghavi, DISEC",
    avatar: "./home-reviews/placeholder-avatar.png",
    review:
      "My first MUN at GMUN was truly memorable. The agendas were meaningful, and the exposure I gained throughout the event significantly contributed to my personal development.",
  },
  {
    id: 3,
    name: "Pragya Mandal, G20",
    avatar: "./home-reviews/placeholder-avatar.png",
    review:
      "GMUN sharpened my public speaking and diplomacy skills. The debates were engaging, and the team was extremely supportive. Highly recommend it for anyone looking to grow.",
  },
  {
    id: 4,
    name: "Pratham Sharma, Lok Sabha",
    avatar: "./home-reviews/placeholder-avatar.png",
    review:
      "Being part of the Lok Sabha at GMUN was incredibly welcoming. The EB guided us throughout, helping beginners grow into confident delegates while learning real geopolitical insights.",
  },
];

const Reviews = () => {
  const [isHover, setIsHover] = useState(-1);

  return (
    <motion.section
      className="reviews-section"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <div className="reviews-wrapper">
        {/* Heading */}
        <h1 className="reviews-heading">What Participants Think About GMUN</h1>

        {/* Reviews Grid */}
        <div className="reviews-container-row">
          <div className="reviews-track">
            {ReviewsData.map((review) => (
              <div
                key={review.id}
                className={`review-card`}
                onMouseEnter={() => setIsHover(review.id)}
                onMouseLeave={() => setIsHover(-1)}
              >
                <div className="review-writer">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="avatar"
                  />
                  <h3 className="name">{review.name}</h3>
                </div>
                <div className={`${isHover === review.id ? 'overflow-y-scroll' : 'overflow-hidden'} review-text`}>
                  <p className={isHover !== review.id && "multiline-ellipsis"}>
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
            {ReviewsData.map((review) => (
              <div
                key={review.id + "-dup"}
                className={`review-card`}
                onMouseEnter={() => setIsHover(review.id)}
                onMouseLeave={() => setIsHover(-1)}
              >
                <div className="review-writer">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="avatar"
                  />
                  <h3 className="name">{review.name}</h3>
                </div>
                <div className={`${isHover === review.id ? 'overflow-y-scroll' : 'overflow-hidden'} review-text`}>
                  <p className={isHover !== review.id && "multiline-ellipsis"}>
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Reviews;
