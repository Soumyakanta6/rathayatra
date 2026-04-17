import React from 'react';

const Logo = ({ size = 60 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
        <linearGradient id="templeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4B5" />
          <stop offset="100%" stopColor="#DEB887" />
        </linearGradient>
        <radialGradient id="wheelGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        <linearGradient id="chariotRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DC143C" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        <linearGradient id="chariotBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#191970" />
        </linearGradient>
        <linearGradient id="chariotYellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {/* Rotating Wheel Group */}
      <g className="wheel-rotate" style={{ transformOrigin: '50px 50px' }}>
        {/* Outer Circle - Chariot Wheel */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="url(#goldGradient)" strokeWidth="4" />
        
        {/* Inner decorative circle */}
        <circle cx="50" cy="50" r="38" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.6" />
        
        {/* Wheel Spokes - 16 spokes like the Konark wheel */}
        {[...Array(16)].map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          const x1 = 50 + 18 * Math.cos(angle);
          const y1 = 50 + 18 * Math.sin(angle);
          const x2 = 50 + 42 * Math.cos(angle);
          const y2 = 50 + 42 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 2 === 0 ? '#FFD700' : '#FFA500'}
              strokeWidth={i % 2 === 0 ? '2.5' : '1.5'}
              opacity={i % 2 === 0 ? '1' : '0.7'}
            />
          );
        })}

        {/* Decorative dots on outer ring */}
        {[...Array(8)].map((_, i) => {
          const angle = ((i * 45 + 22.5) * Math.PI) / 180;
          const x = 50 + 42 * Math.cos(angle);
          const y = 50 + 42 * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2.5"
              fill="#FFD700"
              stroke="#B8860B"
              strokeWidth="0.5"
            />
          );
        })}
      </g>

      {/* Fixed Center Content */}
      <g className="fixed-content">
        {/* Center Hub */}
        <circle cx="50" cy="50" r="17" fill="url(#wheelGradient)" stroke="#B8860B" strokeWidth="2" />
        
        {/* Three Chariots with Deities */}
        {/* Balabhadra Chariot (Taladhwaja) - Left - Blue/Red */}
        <g transform="translate(32, 42)">
          {/* Chariot body */}
          <rect x="0" y="6" width="10" height="8" rx="1" fill="url(#chariotBlue)" />
          {/* Chariot dome */}
          <path d="M1 6 L5 0 L9 6" fill="url(#chariotBlue)" stroke="#FFD700" strokeWidth="0.5" />
          {/* Wheels */}
          <circle cx="2" cy="14" r="2" fill="#8B4513" stroke="#FFD700" strokeWidth="0.5" />
          <circle cx="8" cy="14" r="2" fill="#8B4513" stroke="#FFD700" strokeWidth="0.5" />
          {/* Balabhadra face - White */}
          <circle cx="5" cy="4" r="2.5" fill="#FFFAF0" stroke="#333" strokeWidth="0.3" />
          <circle cx="4" cy="3.5" r="0.6" fill="#000" />
          <circle cx="6" cy="3.5" r="0.6" fill="#000" />
        </g>

        {/* Subhadra Chariot (Darpadalana) - Center - Yellow/Red */}
        <g transform="translate(45, 40)">
          {/* Chariot body */}
          <rect x="0" y="6" width="10" height="8" rx="1" fill="url(#chariotYellow)" />
          {/* Chariot dome */}
          <path d="M1 6 L5 0 L9 6" fill="url(#chariotYellow)" stroke="#8B4513" strokeWidth="0.5" />
          {/* Wheels */}
          <circle cx="2" cy="14" r="2" fill="#8B4513" stroke="#FFD700" strokeWidth="0.5" />
          <circle cx="8" cy="14" r="2" fill="#8B4513" stroke="#FFD700" strokeWidth="0.5" />
          {/* Subhadra face - Yellow */}
          <circle cx="5" cy="4" r="2.5" fill="#FFD700" stroke="#8B4513" strokeWidth="0.3" />
          <circle cx="4" cy="3.5" r="0.6" fill="#000" />
          <circle cx="6" cy="3.5" r="0.6" fill="#000" />
        </g>

        {/* Jagannath Chariot (Nandighosha) - Right - Red */}
        <g transform="translate(58, 42)">
          {/* Chariot body */}
          <rect x="0" y="6" width="10" height="8" rx="1" fill="url(#chariotRed)" />
          {/* Chariot dome */}
          <path d="M1 6 L5 0 L9 6" fill="url(#chariotRed)" stroke="#FFD700" strokeWidth="0.5" />
          {/* Wheels */}
          <circle cx="2" cy="14" r="2" fill="#8B4513" stroke="#FFD700" strokeWidth="0.5" />
          <circle cx="8" cy="14" r="2" fill="#8B4513" stroke="#FFD700" strokeWidth="0.5" />
          {/* Jagannath face - Black */}
          <circle cx="5" cy="4" r="2.5" fill="#1a1a1a" stroke="#FFD700" strokeWidth="0.3" />
          <circle cx="4" cy="3.5" r="0.8" fill="#FFF" />
          <circle cx="6" cy="3.5" r="0.8" fill="#FFF" />
        </g>

        {/* Year Badge */}
        <rect x="32" y="66" width="36" height="12" rx="6" fill="rgba(139, 69, 19, 0.95)" stroke="#FFD700" strokeWidth="0.5" />
        <text
          x="50"
          y="75"
          textAnchor="middle"
          fill="#FFD700"
          fontSize="8"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          2026
        </text>
      </g>

      <style>
        {`
          .wheel-rotate {
            animation: wheelSpin 15s linear infinite;
          }
          @keyframes wheelSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </svg>
  );
};

export default Logo;
