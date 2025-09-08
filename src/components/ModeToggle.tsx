import { Switch } from "@/components/ui/switch";

interface ModeToggleProps {
  isJewMode: boolean;
  onToggle: (value: boolean) => void;
}

export const ModeToggle = ({ isJewMode, onToggle }: ModeToggleProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Pill switch */}
      <button
        onClick={() => onToggle(!isJewMode)}
        aria-pressed={isJewMode}
        className={`relative w-[168px] h-[84px] rounded-full shadow-md transition-all active:scale-[0.98] cursor-pointer ${isJewMode ? "bg-white" : "bg-white"}`}
      >
        <span
          className={`absolute top-1/2 -translate-y-1/2 ${isJewMode ? "right-[9px]" : "left-[9px]"} w-[72px] h-[72px] rounded-full bg-black flex items-center justify-center overflow-hidden shadow ring-2 ring-white transition-all`}
        >
          <img
            src={isJewMode ? "/switch icon default.png" : "/switch icon mode.png"}
            alt={isJewMode ? "Jew mode" : "Bitch mode"}
            className="w-[60px] h-[60px] object-contain"
          />
        </span>
      </button>

      {/* Label below */}
      <span className="text-white font-extrabold tracking-widest drop-shadow-sm select-none">{isJewMode ? "Jew Mode" : "Bitch Mode"}</span>
    </div>
  );
};