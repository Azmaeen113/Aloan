import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CharacterAnimationProps {
  src: string;
  alt: string;
  isVisible: boolean;
  direction: "left" | "right";
  className?: string;
}

export const CharacterAnimation = ({ 
  src, 
  alt, 
  isVisible, 
  direction, 
  className 
}: CharacterAnimationProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldAnimate(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "transition-all duration-500",
        shouldAnimate
          ? direction === "left"
            ? "animate-slide-in-left"
            : "animate-slide-in-right"
          : "opacity-0"
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(className)}
        style={{ filter: 'drop-shadow(var(--shadow-character))' }}
      />
    </div>
  );
};