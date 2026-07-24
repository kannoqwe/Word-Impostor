import React from 'react';

export const Doodles = React.memo(() => (
   <div className="doodle-layer" aria-hidden="true">
      <svg className="doodle doodle--star-a" viewBox="0 0 100 100">
         <path
            d="M50 3 60 34 90 19 71 48 98 61 65 64 70 97 49 71 29 97 34 65 2 61 29 48 10 20 40 34Z"
            fill="currentColor"
            stroke="#1b1b1c"
            strokeWidth="5"
            strokeLinejoin="round"
         />
         <circle cx="44" cy="49" r="4" fill="#1b1b1c" />
         <circle cx="58" cy="49" r="4" fill="#1b1b1c" />
         <path d="M43 61c5 5 11 5 16 0" fill="none" stroke="#1b1b1c" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <svg className="doodle doodle--star-b" viewBox="0 0 100 100">
         <path
            d="M50 6 62 38 96 42 70 63 78 96 50 77 21 96 30 63 4 42 38 38Z"
            fill="currentColor"
            stroke="#1b1b1c"
            strokeWidth="6"
            strokeLinejoin="round"
         />
      </svg>
      <svg className="doodle doodle--spark-a" viewBox="0 0 60 80">
         <path
            d="M30 2c2 21 8 30 28 38-20 7-26 17-28 38C28 57 21 47 2 40 21 32 28 23 30 2Z"
            fill="#ffffff"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
         />
      </svg>
      <svg className="doodle doodle--spark-b" viewBox="0 0 60 80">
         <path
            d="M30 2c2 21 8 30 28 38-20 7-26 17-28 38C28 57 21 47 2 40 21 32 28 23 30 2Z"
            fill="#ffffff"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
         />
      </svg>
      <svg className="doodle doodle--squiggle" viewBox="0 0 120 90">
         <path
            d="M6 7c-11 40 18 49 31 25 12-22-9-33-19-13-14 28 13 55 48 44 20-7 25-21 47-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
         />
      </svg>
   </div>
));
