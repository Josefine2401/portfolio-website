import './PixelField.css';

const pixels = [
  { left: 8, top: 15, color: '#FF3D7F', opacity: 0.25 },
  { left: 22, top: 68, color: '#2F6FED', opacity: 0.2 },
  { left: 35, top: 12, color: '#8C9A5B', opacity: 0.3 },
  { left: 48, top: 80, color: '#FF3D7F', opacity: 0.18 },
  { left: 62, top: 30, color: '#2F6FED', opacity: 0.22 },
  { left: 75, top: 60, color: '#8C9A5B', opacity: 0.25 },
  { left: 88, top: 20, color: '#FF3D7F', opacity: 0.2 },
  { left: 15, top: 45, color: '#2F6FED', opacity: 0.28 },
  { left: 92, top: 75, color: '#8C9A5B', opacity: 0.18 },
];

export default function PixelField() {
  return (
    <div aria-hidden="true" className="pixel-field">
      {pixels.map((pixel, i) => (
        <span
          key={i}
          className="pixel-dot"
          style={{
            left: `${pixel.left}vw`,
            top: `${pixel.top}vh`,
            backgroundColor: pixel.color,
            opacity: pixel.opacity,
          }}
        />
      ))}
    </div>
  );
}