import { Trophy, Zap, Users, Award } from 'lucide-react';
import simpifImage from 'figma:asset/2787af8eb989f7d0e20f49b988e091e2491c5187.png';
import sebraeImage from 'figma:asset/f6f0a62905fd188c9dd2dc61047b13b023d6300c.png';
import hackathonImage from 'figma:asset/e2c0c11d35bf4b475c9a893cb87099b6a72d29a4.png';

export default function Slide17() {
  return (
    <div className="h-full p-16 flex items-center gap-12">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">COMPETIÇÕES & EVENTOS</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="p-4 border-2 border-[#7DD3FC] rounded-lg">
              <Trophy className="size-10 text-[#7DD3FC]" />
            </div>
            <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
              Hackathons & Eventos
            </h2>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Zap className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Participação ativa em hackathons</p>
          </div>
          
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Users className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Eventos e competições do IFPB</p>
          </div>
          
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Award className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Networking e aprendizado contínuo</p>
          </div>
          
          {/* Quote */}
          <div className="mt-8 p-6 border-l-4 border-[#7DD3FC] bg-[#7DD3FC]/5">
            <p className="text-2xl text-[#7DD3FC] font-mono italic">
              "Competir é evoluir."
            </p>
          </div>
        </div>
      </div>
      
      {/* Right - Photo Grid */}
      <div className="w-[600px] h-[550px] flex flex-col gap-3">
        {/* Top photo - SIMPIF */}
        <div className="h-[47%] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative">
          <img 
            src={simpifImage} 
            alt="6º SIMPIF - Evento pelo IFPB" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[#7DD3FC]"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-[#7DD3FC]"></div>
        </div>
        
        {/* Bottom row - 2 photos */}
        <div className="h-[47%] flex gap-3">
          {/* SEBRAE */}
          <div className="flex-1 border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative">
            <img 
              src={sebraeImage} 
              alt="Feira do Empreendedor SEBRAE" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-[#7DD3FC]"></div>
          </div>
          
          {/* Hackathon FUNETEC */}
          <div className="flex-1 border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative">
            <img 
              src={hackathonImage} 
              alt="Hackathon FUNETEC - Equipe Engenharia Elétrica" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#7DD3FC]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}