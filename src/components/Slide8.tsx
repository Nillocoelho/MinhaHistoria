import { Award, FileText, Lightbulb, Shield } from 'lucide-react';
import patentTeamImage from 'figma:asset/5440f1b26606f584dcff7960f0bce6ea701ab4c7.png';

export default function Slide8() {
  return (
    <div className="h-full p-16 flex flex-col justify-center items-center">
      {/* Title */}
      <div className="w-full space-y-4 mb-16">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-[#7DD3FC]"></div>
          <span className="text-[#7DD3FC] font-mono tracking-wider">INOVAÇÃO</span>
        </div>
        
        <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
          Patente de Software
        </h2>
        
        <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
      </div>
      
      {/* Team photo */}
      <div className="w-[1000px] h-[600px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative mb-8 bg-gray-900">
        <img 
          src={patentTeamImage} 
          alt="Equipe da Patente de Software" 
          className="w-full h-full object-contain"
        />
        
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-10 h-10 border-l-2 border-t-2 border-[#7DD3FC]"></div>
        <div className="absolute top-2 right-2 w-10 h-10 border-r-2 border-t-2 border-[#7DD3FC]"></div>
        <div className="absolute bottom-2 left-2 w-10 h-10 border-l-2 border-b-2 border-[#7DD3FC]"></div>
        <div className="absolute bottom-2 right-2 w-10 h-10 border-r-2 border-b-2 border-[#7DD3FC]"></div>
      </div>
      
      {/* Content */}
      <div className="w-full max-w-3xl space-y-6 text-center">
        <div className="flex items-start justify-center gap-3">
          <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
          <p className="text-xl text-gray-300">Participação na criação de uma patente</p>
        </div>
        
        <div className="flex items-start justify-center gap-3">
          <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
          <p className="text-xl text-gray-300">Introdução a inovação e propriedade intelectual</p>
        </div>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-4 left-4 w-24 h-24 border-l-2 border-t-2 border-[#7DD3FC] opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-[#7DD3FC] opacity-30"></div>
    </div>
  );
}