import { Users, Target, Lightbulb, Monitor, Wrench, AlertCircle } from 'lucide-react';
import teamImage from 'figma:asset/8237982b32ad3b98242674f6869c52124d567147.png';

export default function Slide10() {
  return (
    <div className="h-full p-16 flex items-center gap-12">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">PRIMEIRO ESTÁGIO</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="p-4 border-2 border-[#7DD3FC] rounded-lg">
              <Monitor className="size-10 text-[#7DD3FC]" />
            </div>
            <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
              CMSTI
            </h2>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Wrench className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Manutenção de computadores</p>
          </div>
          
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <AlertCircle className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Diagnóstico e suporte</p>
          </div>
          
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Monitor className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Vivência real de problemas tecnológicos</p>
          </div>
        </div>
      </div>
      
      {/* Right placeholder */}
      <div className="w-[550px] h-[500px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative bg-gray-900">
        <img 
          src={teamImage} 
          alt="Equipe do Laboratório ASSERT" 
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