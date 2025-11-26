import { Terminal } from 'lucide-react';
import epocaImage from 'figma:asset/f8d0005aa7f89c954174e93b313dd00bfedbfc84.png';

export default function Slide6() {
  return (
    <div className="h-full p-16 flex items-center gap-12">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">2022</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="p-4 border-2 border-[#7DD3FC] rounded-lg">
              <Terminal className="size-10 text-[#7DD3FC]" />
            </div>
            <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
              Ingresso em TSI
            </h2>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
              <p className="text-xl text-gray-300">Computação fez sentido</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
              <p className="text-xl text-gray-300">Pertencimento à área</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
              <p className="text-xl text-gray-300">Desenvolvimento de projetos reais</p>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-12 p-6 border-l-4 border-[#7DD3FC] bg-[#7DD3FC]/5">
            <p className="text-2xl text-[#7DD3FC] font-mono italic">
              "Aqui encontrei meu caminho."
            </p>
          </div>
        </div>
      </div>
      
      {/* Right image - Classificação ENEM */}
      <div className="w-[650px] h-[550px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative">
        <img 
          src={epocaImage} 
          alt="Classificação ENEM - 1º lugar com 594.7" 
          className="w-full h-full object-contain bg-white"
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