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
  durationMs = 1000,
  jewIconSrc = "/switch icon mode.png",
  bitchIconSrc = "/switch icon default.png",
  ariaLabel = "Toggle mode",
  enableSound = false,
  soundSrc,
}: ModeSwitchProps) => {
  const [isOn, setIsOn] = useState<boolean>(initialMode === "jew");
  const [clicked, setClicked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // read from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey) as ModeType | null;
      if (saved === "jew") setIsOn(true);
      if (saved === "bitch") setIsOn(false);
    } catch {}
  }, [storageKey]);

  // persist and notify on change
  useEffect(() => {
    const modeOut: ModeType = isOn ? "jew" : "bitch";
    try {
      localStorage.setItem(storageKey, modeOut);
    } catch {}
    onChange?.(modeOut);
  }, [isOn, onChange, storageKey]);

  // optional sound
  useEffect(() => {
    if (!enableSound || !soundSrc) return;
    if (!audioRef.current) {
      const audio = new Audio(soundSrc);
      audioRef.current = audio;
    }
  }, [enableSound, soundSrc]);

  const isJew = isOn;

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
      // @ts-expect-error: CSS vars
      "--ms-delay": `150ms`,
    } as React.CSSProperties;
  }, [width, height, durationMs]);

  const toggle = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), durationMs);
    setIsOn((v) => !v);
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
        <span className={`ms-flash ${clicked ? "ms-flash-show" : ""}`} />
        <span className={`ms-thumb ${isJew ? "ms-thumb-right" : "ms-thumb-left"}`}>
          <span className="ms-thumb-icon-wrap">
            <img src={jewIconSrc} alt="Jew Mode" className={`ms-thumb-icon ${isJew ? "opacity-100" : "opacity-0"}`} />
            <img src={bitchIconSrc} alt="Bitch Mode" className={`ms-thumb-icon ${isJew ? "opacity-0" : "opacity-100"}`} />
          </span>
        </span>
      </button>
      <div className={`ms-label ${isJew ? "ms-label-on" : ""}`} aria-hidden>
        {isJew ? "Jew Mode" : "Bitch Mode"}
      </div>
    </div>
  );
};

export default ModeSwitch;


