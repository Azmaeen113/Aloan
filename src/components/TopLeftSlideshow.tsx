import { useEffect, useMemo, useState } from "react";

interface TopLeftSlideshowProps {
  intervalMs?: number;
}

export const TopLeftSlideshow = ({ intervalMs = 3000 }: TopLeftSlideshowProps) => {
  const images = useMemo(
    () => [
      "/slideshow/photo_2025-09-09_20-09-42.jpg",
      "/slideshow/photo_2025-09-09_20-10-11.jpg",
      "/slideshow/photo_2025-09-09_20-10-23.jpg",
      "/slideshow/photo_2025-09-09_20-10-28.jpg",
      "/slideshow/photo_2025-09-09_20-10-33.jpg",
      "/slideshow/photo_2025-09-09_20-10-37.jpg",
      "/slideshow/photo_2025-09-09_20-10-41.jpg",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      // Wait for fade-out then change image and fade-in
      const t = setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 200);
      return () => clearTimeout(t);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className="absolute top-6 left-6 z-[60] pointer-events-none" style={{ transform: "rotate(-15deg) scale(0.85)" }}>
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-md overflow-hidden border-2 border-black shadow-xl bg-white">
        <img
          key={images[index]}
          src={images[index]}
          alt="Showcase"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default TopLeftSlideshow;


