import { TrendingUp, Award, Zap, Map, Lightbulb } from 'lucide-react';

export default function Slide14() {
  const learnings = [
    { icon: TrendingUp, text: 'Evolução não é linha reta' },
    { icon: Award, text: 'Constância vence talento' },
    { icon: Zap, text: 'Oportunidades existem — agarre cada uma' },
    { icon: Map, text: 'Mudanças de rota fazem parte' },
    { icon: Lightbulb, text: 'Inovação nasce da curiosidade' },
  ];

  return (
    <div className="h-full p-12 flex flex-col justify-center">
      {/* Title */}
      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-[#7DD3FC]"></div>
          <span className="text-[#7DD3FC] font-mono tracking-wider">REFLEXÕES</span>
        </div>
        
        <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
          Aprendizados da Jornada
        </h2>
        
        <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
      </div>
      
      {/* Learnings list */}
      <div className="space-y-4">
        {learnings.map((learning, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 p-4 border-2 border-[#7DD3FC] rounded-lg hover:bg-[#7DD3FC]/5 transition-all"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-center size-12 border-2 border-[#7DD3FC] rounded-lg flex-shrink-0">
              <learning.icon className="size-6 text-[#7DD3FC]" />
            </div>
            <p className="text-xl text-white">{learning.text}</p>
          </div>
        ))}
      </div>
      
      {/* Decorative grid pattern */}
      <div className="absolute top-4 right-4 w-24 h-24 opacity-20">
        <div className="grid grid-cols-3 gap-2 h-full">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-[#7DD3FC]"></div>
          ))}
        </div>
      </div>
    </div>
  );
}