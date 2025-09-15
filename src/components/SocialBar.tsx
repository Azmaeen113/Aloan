export const SocialBar = () => {
  const socialLinks = [
    {
      src: "/telegram.png",
      href: "#",
      label: "Telegram"
    },
    {
      src: "/dexscreener.png",
      href: "https://pump.fun/coin/8oXvhQPFxN2iuUBfwyYmq1fYW8hXz12JhhM2SbCQpump",
      label: "Pump.fun"
    },
    {
      src: "/X.png",
      href: "https://x.com/a1loan9",
      label: "X"
    }
  ];

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-4 bg-white rounded-full px-6 py-2 border border-black shadow-lg scale-150">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="p-0 rounded-full transition-transform duration-300 hover:scale-105"
            target="_blank" rel="noopener noreferrer"
            aria-label={social.label}
          >
            <img src={social.src} alt={social.label} className="w-9 h-9 rounded-full object-contain" />
          </a>
        ))}
      </div>
    </div>
  );
};