import React from "react";
import "../styles/components/Review.css";
import H2 from "./Divers/H2";
import Subtitle from "./Divers/Subtitle";
import Stars from "../assets/images/Stars.svg";
import * as motion from "motion/react-client"
// import ReviewsOne from '../assets/images/ReviewsOne.jpg';
// import ReviewsTwo from '../assets/images/ReviewsTwo.jpg';
// import ReviewsThree from '../assets/images/ReviewsThree.jpg';
// import ReviewsFour from '../assets/images/ReviewsFour.jpg';
// import ReviewsFive from '../assets/images/ReviewsFive.jpg';
// import ReviewsSix from '../assets/images/ReviewsSix.jpg';

// const REVIEWS = [
//   { id: 1, nom: "Alice", text: "J'ai adoré la pièce de théâtre! Les acteurs étaient fantastiques et l'histoire captivante.", image: ReviewsOne },
//   { id: 2, nom: "Bob", text: "Une performance époustouflante! Chaque scène était plus impressionnante que la précédente.", image: ReviewsTwo },
//   { id: 3, nom: "Charlie", text: "Bravo à toute l'équipe pour cette soirée inoubliable. C'était magique du début à la fin.", image: ReviewsThree },
//   { id: 4, nom: "David", text: "Les costumes, la mise en scène, tout était parfait. Je recommande vivement cette pièce.", image: ReviewsFour },
//   { id: 5, nom: "Eve", text: "Une véritable œuvre d'art sur scène. Les émotions étaient palpables.", image: ReviewsFive },
//   { id: 6, nom: "Frank", text: "Un spectacle à ne pas manquer! Une interprétation sublime et des moments forts.", image: ReviewsSix }
// ];

const REVIEWS = [
  {
    id: 1,
    nom: "Alice",
    text: "J'ai adoré la pièce de théâtre! Les acteurs étaient fantastiques et l'histoire captivante.",
  },
  {
    id: 2,
    nom: "Bob",
    text: "Une performance époustouflante! Chaque scène était plus impressionnante que la précédente.",
  },
  {
    id: 3,
    nom: "Charlie",
    text: "Bravo à toute l'équipe pour cette soirée inoubliable. C'était magique du début à la fin.",
  },
  {
    id: 4,
    nom: "David",
    text: "Les costumes, la mise en scène, tout était parfait. Je recommande vivement cette pièce.",
  },
  {
    id: 5,
    nom: "Eve",
    text: "Une véritable œuvre d'art sur scène. Les émotions étaient palpables.",
  },
  {
    id: 6,
    nom: "Frank",
    text: "Un spectacle à ne pas manquer! Une interprétation sublime et des moments forts.",
  },
];

const FadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Review = () => {
  return (
    <section className="section-review">
      <H2>Ce que vous dites de nous</H2>
      <Subtitle>
        Vos avis 5 étoiles sur nos représentations et nos cours
      </Subtitle>
      <ul>
        {REVIEWS.map((review, index) => (
          <motion.li
            id={`review-` + review.id}
            key={review.id}
            variants={FadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {/* <img src={review.image} alt={`Review by ${review.nom}`} className="review-image" /> */}
            <div className="review-content">
              <div className="top-review">
                <img
                  className="review-profile"
                  src={`https://picsum.photos/200?random=` + review.id}
                  alt=""
                  loading="lazy"
                />
                <div>
                  <h6 className="font-semibold">{review.nom}</h6>
                  <img
                    className="review-stars"
                    src={Stars}
                    alt="Etoiles avis"
                    loading="lazy"
                  />
                </div>
              </div>
              <p>"{review.text}"</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Review;
