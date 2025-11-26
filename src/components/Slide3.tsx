export default function Slide3() {
  const timeline = [
    { year: '2016', label: 'Automação' },
    { year: '2019', label: 'Elétrica' },
    { year: '2022', label: 'TSI' },
    { year: '2023', label: 'Pesquisa' },
    { year: '2024', label: 'ASSERT' },
    { year: '2025', label: 'Lubit' },
  ];

  return (
    <div className="h-full p-16 flex flex-col justify-center">
      {/* Title */}
      <div className="space-y-4 mb-20">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-[#7DD3FC]"></div>
          <span className="text-[#7DD3FC] font-mono tracking-wider">TRAJETÓRIA</span>
        </div>
        
        <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
          Linha do Tempo
        </h2>
        
        <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
      </div>
      
      {/* Timeline */}
      <div className="relative">
        {/* Main line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#7DD3FC] via-[#7DD3FC] to-[#7DD3FC] transform -translate-y-1/2"></div>
        
        {/* Timeline items */}
        <div className="relative flex justify-between items-center">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-6 relative">
              {/* Node */}
              <div className="size-6 bg-black border-4 border-[#7DD3FC] rounded-full shadow-[0_0_20px_rgba(125,211,252,0.5)] relative z-10">
                <div className="absolute inset-0 bg-[#7DD3FC] rounded-full animate-ping opacity-75"></div>
              </div>
              
              {/* Year */}
              <div className="absolute top-12 text-center space-y-2">
                <div className="text-3xl text-[#7DD3FC] font-mono">{item.year}</div>
                <div className="text-sm text-gray-400 font-mono whitespace-nowrap">{item.label}</div>
              </div>
              
              {/* Arrow connector (except last) */}
              {index < timeline.length - 1 && (
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2">
                  <div className="w-4 h-4 border-r-2 border-t-2 border-[#7DD3FC] transform rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-32 h-32 border-l-2 border-t-2 border-[#7DD3FC] opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-[#7DD3FC] opacity-30"></div>
    </div>
  );
}
