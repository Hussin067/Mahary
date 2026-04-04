import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      {/* The Blue to Teal Gradient */}
      <linearGradient id="maharyGradient" x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" /> {/* Tailwind Blue-600 */}
        <stop offset="1" stopColor="#0D9488" /> {/* Tailwind Teal-600 */}
      </linearGradient>
    </defs>

    {/* Geometric Base / Rounded Square */}
    <rect width="48" height="48" rx="14" fill="url(#maharyGradient)" />

    {/* Career Progression Arrow / Stylized 'M' for Mahary */}
    <path
      d="M14 32L22 22L28 28L34 16"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrow Head */}
    <path
      d="M26 16H34V24"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Logo;