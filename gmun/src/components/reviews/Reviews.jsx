import { useEffect, useState } from "react";
import "./styles.css";

const ReviewsData = [
  {
    id: 0,
    name: "Participant A",
    avatar: "./public/home-reviews/placeholder-avatar.png",
    review: "GMUN was an incredible experience that broadened my horizons.",
  },
  {
    id: 1,
    name: "Participant B",
    avatar: "../../../public/home-reviews/placeholder-avatar.png",
    review: "The debates were engaging and the organization was top-notch.",
  },
  {
    id: 2,
    name: "Participant C",
    avatar: "../../../public/home-reviews/placeholder-avatar.png",
    review: "I made lifelong friends and learned so much about diplomacy.",
  },
  {
    id: 3,
    name: "Participant D",
    avatar: "../../../public/home-reviews/placeholder-avatar.png",
    review: "I made lifelong friends and learned so much about diplomacy.",
  },
  {
    id: 4,
    name: "Participant E",
    avatar: "../../../public/home-reviews/placeholder-avatar.png",
    review: "I made lifelong friends and learned so much about diplomacy.",
  },
  {
    id: 5,
    name: "Participant F",
    avatar: "../../../public/home-reviews/placeholder-avatar.png",
    review: "I made lifelong friends and learned so much about diplomacy.",
  },
];

const Reviews = () => {
  //Progress ring carousel state
  const duration = 5000;
  const r = 20;
  const circumference = 2 * Math.PI * r;
  const [topId, setTopId] = useState(1);

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
      <div>
        {ReviewsData.map((review) => (
          <div key={review.id}>
            {topId === review.id && (
              <div className="avatar-wrapper">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <svg
                  className="progress-ring"
                  viewBox="0 0 40 40"
                  aria-hidden="true"
                >
                  <circle
                    className="progress-ring__circle"
                    cx="20"
                    cy="20"
                    r={r}
                    strokeWidth="2"
                    style={{
                      animationDuration: `${duration}ms`,
                      strokeDasharray: `${circumference}`,
                    }}
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
