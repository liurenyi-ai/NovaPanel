export default function NovaLogo() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hex" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        <linearGradient id="bolt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <polygon
        points="36,6 58,18 58,54 36,66 14,54 14,18"
        fill="none"
        stroke="url(#hex)"
        strokeWidth="3"
        filter="url(#glow)"
      />

      <path
        d="M42 14
           L26 38
           H36
           L30 58
           L48 32
           H38
           L42 14Z"
        fill="url(#bolt)"
        filter="url(#glow)"
      />
    </svg>
  );
}