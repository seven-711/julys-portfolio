export default function GradientText({ children }) {
  return (
    <span className={`bg-clip-text text-transparent animate-gradient ${className}`} style={style}>
      {children}
    </span>
  );
}
