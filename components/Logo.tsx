export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="8" fill="#006b3f" stroke="#fff" strokeWidth="3" />
      <path d="M30 55 L50 55 L50 35" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M44 41 L50 35 L56 41" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M50 55 L70 55" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 6" />
      <text x="50" y="82" fill="#fff" fontFamily="system-ui" fontWeight="800" fontSize="10" textAnchor="middle">EXIT</text>
    </svg>
  );
}
