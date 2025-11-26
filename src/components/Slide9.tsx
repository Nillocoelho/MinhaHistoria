import { Search, Heart, GraduationCap } from 'lucide-react';
import projectImage from 'figma:asset/f7d6632eaafe607825c6700c9fb046236f766340.png';

export default function Slide9() {
  const items = [
    { icon: Search, title: 'Pesquisa', desc: 'Pensamento analítico' },
    { icon: Heart, title: 'Extensão', desc: 'Impacto social' },
    { icon: GraduationCap, title: 'Monitoria', desc: 'Ensinar para aprender' },
  ];

  return (
    <div className="h-full p-16 flex items-center gap-12">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">EXPERIÊNCIA ACADÊMICA</span>
          </div>
          
          <h2 className="text-4xl text-[#7DD3FC] font-mono tracking-tight leading-tight">
            Pesquisa, Extensão<br />e Monitoria
          </h2>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
        </div>
        
        {/* Items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC] hover:bg-[#7DD3FC]/5 transition-colors">
              <div className="p-3 border-2 border-[#7DD3FC] rounded-lg">
                <item.icon className="size-6 text-[#7DD3FC]" />
              </div>
              <div className="flex-1">
                <p className="text-xl text-[#7DD3FC] mb-1">{item.title}</p>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quote */}
        <div className="p-6 border-l-4 border-[#7DD3FC] bg-[#7DD3FC]/5">
          <p className="text-2xl text-[#7DD3FC] font-mono italic">
            "Pesquisa me ensinou a pensar. Extensão me ensinou a aplicar."
          </p>
        </div>
      </div>
      
      {/* Right placeholder */}
      <div className="w-[450px] h-[500px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative">
        <img 
          src={projectImage} 
          alt="Projeto Interconecta: MQTT-SN" 
          className="w-full h-full object-cover"
        />
        
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[#7DD3FC]"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-[#7DD3FC]"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[#7DD3FC]"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[#7DD3FC]"></div>
      </div>
    </div>
  );
}