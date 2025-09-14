import { useEffect, useState } from "react";
import { CharacterAnimation } from "./CharacterAnimation";
import { SocialBar } from "./SocialBar";
import { WindowDialog } from "./WindowDialog";
import ModeSwitch from "./ModeSwitch";
import { InfoPanels } from "./InfoPanels";
import TopLeftSlideshow from "./TopLeftSlideshow";
// MoneyBills removed for clean background

export const Hero = () => {
  const [isJewMode, setIsJewMode] = useState(true);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Sync initial mode with persisted value from ModeSwitch
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mode-switch");
      if (saved === "jew") setIsJewMode(true);
      if (saved === "bitch") setIsJewMode(false);
    } catch {}
  }, []);

  // On entering Jew Mode, pop in left then right once
  useEffect(() => {
    if (isJewMode) {
      setShowLeft(false);
      setShowRight(false);
      const t1 = setTimeout(() => setShowLeft(true), 200);
      const t2 = setTimeout(() => setShowRight(true), 900);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      setShowLeft(false);
      setShowRight(false);
    }
  }, [isJewMode]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image layer */}
      {isJewMode ? (
        <>
          {/* Mobile/Tablet background video */}
          <video
            className="absolute inset-0 z-0 w-full h-full object-cover lg:hidden"
            src="/Surf%20(2).mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Desktop background */}
          <div 
            className="absolute inset-0 z-0 hidden lg:block bg-no-repeat bg-center bg-contain md:bg-[length:100%_100%]"
            style={{ 
              backgroundImage: 'url("/Background%20image.jpg")'
            }}
          />
        </>
      ) : (
        <video
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src="/2mb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Top Right - Mode Switch */}
      <div className="absolute top-8 right-8 z-50 pointer-events-auto">
        <ModeSwitch onChange={(m) => setIsJewMode(m === "jew")} />
      </div>

      {/* Top Left - Slideshow box (Jew Mode only) */}
      {isJewMode && <TopLeftSlideshow />}

      {/* Fullscreen character layers (Jew Mode) */}
      {isJewMode && (
        <>
          {/* Back layer - Left image */}
          <div className="absolute inset-0 z-10 flex md:overflow-hidden">
            <CharacterAnimation
              src="/Left%20pop%20up%20character.png"
              alt="Left character"
              isVisible={showLeft}
              direction="left"
              className="w-full h-full object-cover object-center scale-[1.6] md:scale-100"
            />
          </div>

          {/* Front layer - Right image */}
          <div className="absolute inset-0 z-20 flex translate-x-24 md:translate-x-40 md:overflow-hidden">
            <CharacterAnimation
              src="/Right%20pop%20up%20character.png"
              alt="Right character"
              isVisible={showRight}
              direction="right"
              className="w-full h-full object-cover object-center scale-[1.6] md:scale-100"
            />
          </div>
        </>
      )}

      {/* Bottom Elements (Jew Mode only) */}
      {isJewMode && (
        <div className="absolute bottom-0 left-0 right-0 z-[80]">
          {/* Social Media Bar */}
          <div className="mb-0 relative -translate-y-2 md:-translate-y-3">
            <SocialBar />
          </div>
          
          {/* Info Panels between social bar and window */}
          <div className="mb-0 flex justify-center">
            <InfoPanels />
          </div>

          {/* Windows Dialog */}
          <div className="mb-0">
            <WindowDialog />
          </div>

          {/* Footer Text */}
          <div className="mt-4 pb-4 flex justify-center">
            <div 
              className="text-center text-xs md:text-sm px-4 max-w-4xl"
              style={{ fontFamily: '"Press Start 2P", system-ui, sans-serif' }}
            >
              <div className="text-black/70 mb-2">
                © 2025 $ALOAN. No rights reserved.
              </div>
              <div className="text-black/60 text-[10px] md:text-xs leading-relaxed">
                DISCLAIMER: None of the content on this website is financial advice. Every piece of information on this website is a work of satire. DYOR, don't be a retard.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};