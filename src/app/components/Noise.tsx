const Noise = () => {
  return (
    <>
      <svg
        className="pointer-events-none fixed isolate z-40 opacity-60 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="noise-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-grain)"></rect>
      </svg>
    </>
  );
};

export default Noise;
