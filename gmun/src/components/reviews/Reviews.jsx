import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./styles.css";

const ReviewsData = [
  {
    id: 0,
    name: "Participant A",
    avatar: "./home-reviews/placeholder-avatar.png",
    review: "GMUN was an incredible experience that broadened my horizons.",
  },
  {
    id: 1,
    name: "Participant B",
    avatar: "./home-reviews/placeholder-avatar.png",
    review: "The debates were engaging and the organization was top-notch.",
  },
  {
    id: 2,
    name: "Participant C",
    avatar: "./home-reviews/placeholder-avatar.png",
    review: "I made lifelong friends and learned so much about diplomacy.",
  },
  {
    id: 3,
    name: "Participant D",
    avatar: "./home-reviews/placeholder-avatar.png",
    review: "I made lifelong friends and learned so much about diplomacy.",
  },
  {
    id: 4,
    name: "Participant E",
    avatar: "./home-reviews/placeholder-avatar.png",
    review: "I made lifelong friends and learned so much about diplomacy.",
  },
  {
    id: 5,
    name: "Participant F",
    avatar: "./home-reviews/placeholder-avatar.png",
    review: "I made lifelong friends and learned so much about diplomacy.",
  },
];

const Reviews = () => {
  //Progress ring carousel state
  const duration = 5000;
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const [topId, setTopId] = useState(1);
  const [canEnter, setCanEnter] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopId((topId + 1) % ReviewsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [topId]);

  return (
    <section className="">
      <div className="">
        {/* Heading */}
        <h1 className="">What Participants think about GMUN</h1>

        {/* Reviews Grid */}
        <div className="reviews-container-row">
          {/* First Row */}
          <div className="reviews-track">
            {ReviewsData.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-writer">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="avatar"
                  />
                  <h3 className="name">{review.name}</h3>
                </div>
                <div className="review-text">
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
            {ReviewsData.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-writer">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="avatar"
                  />
                  <h3 className="name">{review.name}</h3>
                </div>
                <div className="review-text">
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="reverse reviews-track">
            {ReviewsData.map((review) => (
              <div key={review.id} className="review-card second-row">
                <div className="review-writer">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="avatar"
                  />
                  <h3 className="name">{review.name}</h3>
                </div>
                <div className="review-text">
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
            {ReviewsData.map((review) => (
              <div key={review.id} className="review-card second-row">
                <div className="review-writer">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="avatar"
                  />
                  <h3 className="name">{review.name}</h3>
                </div>
                <div className="review-text">
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="reviews-track">
            {ReviewsData.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-writer">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="avatar"
                  />
                  <h3 className="name">{review.name}</h3>
                </div>
                <div className="review-text">
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
            {ReviewsData.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-writer">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="avatar"
                  />
                  <h3 className="name">{review.name}</h3>
                </div>
                <div className="review-text">
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Column Carousel */}
      <div className="reviews-container-column">
        {/* First Column */}
        <div className="reviews-track column">
          {ReviewsData.map((review) => (
            <div key={review.id} className="review-card-column">
              <div className="review-writer">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <h3 className="name">{review.name}</h3>
              </div>
              <div className="review-text">
                <p>{review.review}</p>
              </div>
            </div>
          ))}

          {ReviewsData.map((review) => (
            <div key={review.id} className="review-card-column">
              <div className="review-writer">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <h3 className="name">{review.name}</h3>
              </div>
              <div className="review-text">
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="reverse reviews-track column">
          {ReviewsData.map((review) => (
            <div key={review.id} className="review-card-column">
              <div className="review-writer">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <h3 className="name">{review.name}</h3>
              </div>
              <div className="review-text">
                <p>{review.review}</p>
              </div>
            </div>
          ))}

          {ReviewsData.map((review) => (
            <div key={review.id} className="review-card-column">
              <div className="review-writer">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <h3 className="name">{review.name}</h3>
              </div>
              <div className="review-text">
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Third Column */}
        <div className="reviews-track column">
          {ReviewsData.map((review) => (
            <div key={review.id} className="review-card-column">
              <div className="review-writer">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <h3 className="name">{review.name}</h3>
              </div>
              <div className="review-text">
                <p>{review.review}</p>
              </div>
            </div>
          ))}

          {ReviewsData.map((review) => (
            <div key={review.id} className="review-card-column">
              <div className="review-writer">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <h3 className="name">{review.name}</h3>
              </div>
              <div className="review-text">
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* progress ring carousel */}
      <div className="progress-ring-carousel">
        {ReviewsData.map((review) => (
          <AnimatePresence key={review.id}>
            {topId === review.id && (
              <motion.div
                className="review-box"
                key={review.id}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.5 }}
              >
                <div className="avatar-wrapper">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="avatar"
                  />
                  <svg
                    width={100}
                    height={100}
                    viewBox={`0 0 100 100`}
                    className="progression-ring"
                  >
                    <g transform={`rotate(-90 ${50} ${50})`}>
                      {/* background track */}
                      <motion.circle
                        cx={40}
                        cy={40}
                        r={radius}
                        fill="transparent"
                        stroke={"#e6e6e6"}
                        strokeWidth={2}
                        initial={{
                          strokeDasharray: circumference,
                          strokeDashoffset: circumference + 1,
                        }}
                        animate={{
                          strokeDasharray: circumference,
                          strokeDashoffset: 0,
                        }}
                        transition={{
                          duration: duration / 1000 - 0.5,
                          ease: "linear",
                        }}
                      />
                    </g>
                  </svg>
                  <h3 className="name-center">{review.name}</h3>
                </div>

                {topId === review.id && (
                  <div className="review-text-box">
                    <p className="review-text-center">{review.review}</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
