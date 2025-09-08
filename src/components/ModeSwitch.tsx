import { useEffect, useMemo, useRef, useState } from "react";
import "./ModeSwitch.css";

export type ModeType = "jew" | "bitch";

interface ModeSwitchProps {
  initialMode?: ModeType;
  onChange?: (mode: ModeType) => void;
  storageKey?: string;
  width?: number; // px
  height?: number; // px
  durationMs?: number;
  jewIconSrc?: string;
  bitchIconSrc?: string;
  ariaLabel?: string;
  enableSound?: boolean;
  soundSrc?: string;
}

export const ModeSwitch = ({
  initialMode = "jew",
  onChange,
  storageKey = "mode-switch",
  width = 168,
  height = 84,
  durationMs = 300,
  jewIconSrc = "/switch icon mode.png",
  bitchIconSrc = "/switch icon default.png",
  ariaLabel = "Toggle mode",
  enableSound = false,
  soundSrc,
}: ModeSwitchProps) => {
  const [mode, setMode] = useState<ModeType>(initialMode);
  const [clicked, setClicked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // read from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey) as ModeType | null;
      if (saved === "jew" || saved === "bitch") setMode(saved);
    } catch {}
  }, [storageKey]);

  // persist and notify on change
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, mode);
    } catch {}
    onChange?.(mode);
  }, [mode, onChange, storageKey]);

  // optional sound
  useEffect(() => {
    if (!enableSound || !soundSrc) return;
    if (!audioRef.current) {
      const audio = new Audio(soundSrc);
      audioRef.current = audio;
    }
  }, [enableSound, soundSrc]);

  const isJew = mode === "jew";
  const thumbIcon = isJew ? jewIconSrc : bitchIconSrc;

  const styleVars = useMemo(() => {
    const thumb = Math.round(Math.min(width, height) * 0.86);
    const pad = Math.round((height - thumb) / 2);
    return {
      // css variables for theming
      // @ts-expect-error: CSS vars
      "--ms-width": `${width}px`,
      // @ts-expect-error: CSS vars
      "--ms-height": `${height}px`,
      // @ts-expect-error: CSS vars
      "--ms-thumb": `${thumb}px`,
      // @ts-expect-error: CSS vars
      "--ms-pad": `${pad}px`,
      // @ts-expect-error: CSS vars
      "--ms-duration": `${durationMs}ms`,
    } as React.CSSProperties;
  }, [width, height, durationMs]);

  const toggle = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
    setMode((m) => (m === "jew" ? "bitch" : "jew"));
    if (enableSound && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="ms-root" style={styleVars}>
      <button
        type="button"
        role="switch"
        aria-checked={isJew}
        aria-label={ariaLabel}
        className={`ms-track ${isJew ? "ms-on" : "ms-off"} ${clicked ? "ms-clicked" : ""}`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <span className={`ms-thumb ${isJew ? "ms-thumb-right" : "ms-thumb-left"}`}>
          <img src={thumbIcon} alt={isJew ? "Jew Mode" : "Bitch Mode"} className="ms-thumb-icon" />
        </span>
      </button>
      <div className={`ms-label ${isJew ? "ms-label-on" : ""}`} aria-hidden>
        {isJew ? "Jew Mode" : "Bitch Mode"}
      </div>
    </div>
  );
};

export default ModeSwitch;


