import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = '', height = 36 }: LogoProps) {
  // Captures the exact style: "mKG" in bold golden-orange, the sweeping orange arch,
  // and the wide, italic "POWER BEYOND..." tagline underneath.
  const width = Math.round(height * 2.5);

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 250 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* High-fidelity orange gradient matching the MKG industrial branding */}
        <linearGradient id="mkg-brand-grad" x1="0" y1="0" x2="1" y2="0.8">
          <stop offset="0%" stopColor="#ffb000" />
          <stop offset="100%" stopColor="#ff4d00" />
        </linearGradient>
      </defs>

      {/* "mKG" Stylized Letterforms */}
      <g>
        {/* Lowercase arched 'm' with double pillar curve */}
        <path 
          d="M 22 56 L 22 25 C 22 17, 28 12, 35 12 C 42 12, 47 17, 47 25 L 47 56 M 47 25 C 47 17, 53 12, 60 12 C 67 12, 72 17, 72 25 L 72 56" 
          stroke="url(#mkg-brand-grad)" 
          strokeWidth="11" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Uppercase 'K' */}
        <path 
          d="M 90 12 L 90 56 M 90 34 L 118 12 M 102 24 L 121 56" 
          stroke="url(#mkg-brand-grad)" 
          strokeWidth="11" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Uppercase 'G' */}
        <path 
          d="M 178 24 C 173 14, 161 8, 146 8 C 126 8, 112 21, 112 34 C 112 47, 126 60, 146 60 C 163 60, 175 50, 177 35 L 148 35" 
          stroke="url(#mkg-brand-grad)" 
          strokeWidth="11" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Trademark TM Symbol */}
        <text 
          x="184" 
          y="20" 
          fill="#ffb000" 
          fontSize="16" 
          fontWeight="900" 
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.05em"
        >
          TM
        </text>
      </g>

      {/* Elegant sweeping arch line under mKG */}
      <path 
        d="M 8 68 C 90 54, 160 54, 242 72" 
        stroke="url(#mkg-brand-grad)" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
      />

      {/* "POWER BEYOND..." stylized tag */}
      <text 
        x="125" 
        y="92" 
        fill="#e4e4e7" 
        fontSize="17.5" 
        fontWeight="900" 
        fontStyle="italic"
        fontFamily="'Space Grotesk', system-ui, -apple-system, sans-serif" 
        textAnchor="middle"
        letterSpacing="0.25em"
      >
        POWER BEYOND...
      </text>
    </svg>
  );
}
