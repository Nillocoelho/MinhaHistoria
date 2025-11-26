import { Activity } from 'lucide-react';
import eletricaImage from 'figma:asset/bd06d44edf696914133b066c05ae3ef2fa65291e.png';

export default function Slide5() {
  return (
    <div className="h-full p-16 flex items-center gap-12">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">2019</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="p-4 border-2 border-[#7DD3FC] rounded-lg">
              <Activity className="size-10 text-[#7DD3FC]" />
            </div>
            <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
              Engenharia Elétrica
            </h2>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
              <p className="text-xl text-gray-300">Aprofundamento técnico</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
              <p className="text-xl text-gray-300">Descoberta de que a rota principal seria software</p>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-12 p-6 border-l-4 border-[#7DD3FC] bg-[#7DD3FC]/5">
            <p className="text-2xl text-[#7DD3FC] font-mono italic">
              "Mudar de rota é coragem."
            </p>
          </div>
        </div>
      </div>
      
      {/* Right placeholder */}
      <div className="w-[600px] h-[550px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative">
        <img 
          src={eletricaImage} 
          alt="Apresentação de EDO em Circuitos Elétricos" 
          className="w-full h-full object-contain"
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