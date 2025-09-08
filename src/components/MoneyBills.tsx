export const MoneyBills = () => {
  const bills = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 80 + 10,
    rotation: Math.random() * 360,
    delay: Math.random() * 2,
    size: Math.random() * 0.5 + 0.7
  }));

  return (
    <>
      {bills.map((bill) => (
        <div
          key={bill.id}
          className="absolute pointer-events-none animate-float"
          style={{
            left: `${bill.x}%`,
            top: `${bill.y}%`,
            transform: `rotate(${bill.rotation}deg) scale(${bill.size})`,
            animationDelay: `${bill.delay}s`,
            zIndex: 5
          }}
        >
          {/* Money Bill SVG */}
          <div 
            className="w-16 h-10 rounded-sm shadow-md"
            style={{ 
              background: 'var(--gradient-money)',
              filter: 'drop-shadow(var(--shadow-money))'
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
              $
            </div>
          </div>
        </div>
      ))}
    </>
  );
};