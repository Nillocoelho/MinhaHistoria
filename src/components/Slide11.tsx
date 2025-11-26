import { Cpu, Lightbulb, Users } from 'lucide-react';
import assertTeamImage from 'figma:asset/981e5f5d591160d3f392cd4ee4e94c25f7930ca9.png';

export default function Slide11() {
  return (
    <div className="h-full p-16 flex items-center gap-12">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">LABORATÓRIO DE INOVAÇÃO</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="p-4 border-2 border-[#7DD3FC] rounded-lg">
              <Cpu className="size-10 text-[#7DD3FC]" />
            </div>
            <h2 className="text-6xl text-[#7DD3FC] font-mono tracking-tight">
              ASSERT
            </h2>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Lightbulb className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">P&D aplicado</p>
          </div>
          
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Lightbulb className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Projetos reais</p>
          </div>
          
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Users className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Mentoria técnica</p>
          </div>
        </div>
        
        {/* Quote */}
        <div className="p-6 border-l-4 border-[#7DD3FC] bg-[#7DD3FC]/5">
          <p className="text-3xl text-[#7DD3FC] font-mono italic">
            "No ASSERT eu vivi tecnologia de verdade."
          </p>
        </div>
      </div>
      
      {/* Right placeholder - larger */}
      <div className="w-[550px] h-[500px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative bg-gray-900">
        <img 
          src={assertTeamImage} 
          alt="Equipe do Laboratório ASSERT" 
          className="w-full h-full object-contain"
        />
        
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-10 h-10 border-l-2 border-t-2 border-[#7DD3FC]"></div>
        <div className="absolute top-2 right-2 w-10 h-10 border-r-2 border-t-2 border-[#7DD3FC]"></div>
        <div className="absolute bottom-2 left-2 w-10 h-10 border-l-2 border-b-2 border-[#7DD3FC]"></div>
        <div className="absolute bottom-2 right-2 w-10 h-10 border-r-2 border-b-2 border-[#7DD3FC]"></div>
      </div>
    </div>
  );
}