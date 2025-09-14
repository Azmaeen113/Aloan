import { useState } from "react";

type PanelKey = "ABOUT" | "WHITEPAPER" | "ROADMAP" | "VISION";

const CONTENT: Record<PanelKey, { title: string; body: string }[]> = {
  ABOUT: [
    {
      title: "What is Aloan?",
      body:
        "A retarded tribute to the most important character of this Crypto cycle. He freed the trenches and gave all degens the chance to become the protagonists of the game. Aloan represents the purest essence of each degen. It's not about winning or losing, it's about belonging to the trenches. You lose, you ask for $aloan. You win, you ask for more $aloan, and that's how you ensure your permanence in the trenches forever.",
    },
  ],
  WHITEPAPER: [
    {
      title: "Whitepaper",
      body:
        "A bunch of supply will be delivered to Alon and other dedicated KOLs who support PumpFun and the JewMode (IYKYK). Since holding times in the trenches are critical, it's best to increase the chances of the foundation being solid. Since the DEV has so much fun creating art and stories, he dreams and plans to dedicate full time to Aloan and hopes/wants this project to become a complete success for his personal life—as well as for the lives of Aloan's supporters.",
    },
  ],
  ROADMAP: [
    {
      title: "Roadmap",
      body:
        "We're going to turn $aloan into the biggest retarded meme in history. Yes, we're going to surpass Boden ATH and even further. The projection and vision for the future are eternal, just as Alon and PumpFun are here to stay, so is Aloan. There is no Crypto without Alon, there will be no Crypto without Aloan. This special and lovely character will be in charge of communicating the mandate of the king of PumpFun in the most retarded way possible, so we can ensure everyone can understand and have fun with it.",
    },
  ],
  VISION: [
    {
      title: "Vision",
      body:
        "Bro, relax and enjoy the ride. Leave your anxiety aside and have fun shilling and creating memes while you hold. The trenches are here to stay. Opportunities come and go and are endless. Don't be hard on yourself if you lose a runner, another will come. Just to let you know, $aloan starting to run right now.",
    },
  ],
};

export const InfoPanels = () => {
  const [openKey, setOpenKey] = useState<PanelKey | null>(null);
  const [showWhitepaper, setShowWhitepaper] = useState(false);

  const buttons: PanelKey[] = ["ABOUT", "WHITEPAPER", "ROADMAP", "VISION"];

  return (
    <div className="flex flex-col items-center gap-0">
      {/* Buttons row */}
      <div
        className="flex flex-wrap items-center justify-center gap-6 px-0 scale-[0.67] origin-center"
        style={{ fontFamily: '"Press Start 2P", system-ui, sans-serif' }}
      >
        {buttons.map((key) => (
          <button
            key={key}
            onClick={() => {
              if (key === "WHITEPAPER") {
                setShowWhitepaper(true);
              } else {
                setOpenKey(key);
              }
            }}
            className="text-black bg-white/80 border-[3px] border-black px-4 py-1 rounded-none shadow-[0_2px_0_0_#000] hover:scale-[1.01] transition-transform text-2xl md:text-3xl tracking-widest"
          >
            {key}
          </button>
        ))}
      </div>

      {/* Modal overlay */}
      {openKey && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4" onClick={() => setOpenKey(null)}>
          <div
            className="w-[95vw] md:w-[840px] bg-[#c0c0c0] border-2 border-[#808080] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="bg-[#0000aa] text-white px-2 py-1 flex items-center justify-between select-none">
              <span className="text-sm font-bold" style={{ fontFamily: '\"Press Start 2P\", system-ui, sans-serif' }}>{openKey}</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setOpenKey(null)}
                  className="w-4 h-4 bg-[#ff0000] hover:bg-red-600 flex items-center justify-center text-xs border border-[#808080] cursor-pointer"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="p-4 bg-[#c0c0c0]">
              {CONTENT[openKey].map((section, idx) => (
                <div key={idx} className={idx > 0 ? "mt-4" : undefined}>
                  <h2 className="text-[18px] md:text-[22px] mb-3" style={{ fontFamily: '\"Press Start 2P\", system-ui, sans-serif' }}>
                    {section.title}
                  </h2>
                  <p className="text-black/80 leading-relaxed text-base md:text-lg">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Whitepaper Modal */}
      {showWhitepaper && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4" onClick={() => setShowWhitepaper(false)}>
          <div
            className="w-[95vw] md:w-[840px] bg-[#c0c0c0] border-4 border-black shadow-lg transform scale-75"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="bg-[#0000aa] text-white px-2 py-1 flex items-center justify-between select-none">
              <span className="text-sm font-bold" style={{ fontFamily: '\"Press Start 2P\", system-ui, sans-serif' }}>WHITEPAPER</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setShowWhitepaper(false)}
                  className="w-4 h-4 bg-[#ff0000] hover:bg-red-600 flex items-center justify-center text-xs border border-[#808080] cursor-pointer"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
            {/* Whitepaper Image */}
            <div className="p-2 bg-[#c0c0c0]">
              <img 
                src="/photo_2025-09-14_21-47-08.jpg" 
                alt="Whitepaper" 
                className="w-full h-auto border-2 border-black"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPanels;


