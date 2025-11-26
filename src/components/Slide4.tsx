import { Zap } from 'lucide-react';
import automacaoImage from 'figma:asset/fb9405e17c8501b3dc2ebd8d6a98ac903a874f10.png';

export default function Slide4() {
  return (
    <div className="h-full p-16 flex items-center gap-12">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">2016</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="p-4 border-2 border-[#7DD3FC] rounded-lg">
              <Zap className="size-10 text-[#7DD3FC]" />
            </div>
            <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
              Automação Industrial
            </h2>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
              <p className="text-xl text-gray-300">Primeiro contato com tecnologia aplicada</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
              <p className="text-xl text-gray-300">Base sólida de eletrônica e lógica</p>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-12 p-6 border-l-4 border-[#7DD3FC] bg-[#7DD3FC]/5">
            <p className="text-2xl text-[#7DD3FC] font-mono italic">
              "O início nem sempre é o destino final."
            </p>
          </div>
        </div>
      </div>
      
      {/* Right placeholder */}
      <div className="w-[500px] h-[550px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative">
        <img 
          src={automacaoImage} 
          alt="Foto da época de Automação" 
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