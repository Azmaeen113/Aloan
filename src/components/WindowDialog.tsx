import { Minus, Square, X } from "lucide-react";
import { useState } from "react";

export const WindowDialog = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  if (isClosed) return null;

  return (
    <div className="flex justify-center">
      <div className={`${isMaximized ? "w-[90vw]" : "w-[95vw] md:w-[840px]"} bg-[#c0c0c0] border-2 border-[#808080] shadow-lg`}>
        {/* Windows Title Bar */}
        <div className="bg-[#0000aa] text-white px-2 py-1 flex items-center justify-between select-none">
          <span className="text-sm font-bold" style={{ fontFamily: '"Press Start 2P", system-ui, sans-serif' }}>★ Aloan ★</span>
          <div className="flex gap-1">
            <button
              onClick={() => setIsMinimized((v) => !v)}
              className="w-4 h-4 bg-[#c0c0c0] hover:bg-white flex items-center justify-center text-xs border border-[#808080] cursor-pointer"
              aria-label="Minimize"
            >
              <Minus className="w-2 h-2 text-black" />
            </button>
            <button
              onClick={() => setIsMaximized((v) => !v)}
              className="w-4 h-4 bg-[#c0c0c0] hover:bg-white flex items-center justify-center text-xs border border-[#808080] cursor-pointer"
              aria-label="Maximize"
            >
              <Square className="w-2 h-2 text-black" />
            </button>
            <button
              onClick={() => setIsClosed(true)}
              className="w-4 h-4 bg-[#ff0000] hover:bg-red-600 flex items-center justify-center text-xs border border-[#808080] cursor-pointer"
              aria-label="Close"
            >
              <X className="w-2 h-2 text-white" />
            </button>
          </div>
        </div>
        
        {/* Dialog Content */}
        {!isMinimized && (
          <div className="p-2 bg-[#c0c0c0]">
            <div className="text-[14px] sm:text-[16px] md:text-[18px] tracking-[0.08em] leading-tight text-black/80 text-center break-words whitespace-normal md:truncate" style={{ fontFamily: '"Press Start 2P", system-ui, sans-serif' }}>
              6ogzHhzdQJ9Pgv6hZ2MNze7JrzBMAFyBBWUYp1Fhitx
            </div>
          </div>
        )}
      </div>
    </div>
  );
};