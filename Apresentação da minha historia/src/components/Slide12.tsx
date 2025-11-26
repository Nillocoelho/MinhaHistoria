import { Briefcase, TrendingUp, Code2 } from 'lucide-react';
import lubitImage from 'figma:asset/dc88dcdd3e845d87cc601378c4059cdf2cf9271e.png';

export default function Slide12() {
  return (
    <div className="h-full p-16 flex items-center gap-12">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">CARREIRA PROFISSIONAL</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="p-4 border-2 border-[#7DD3FC] rounded-lg">
              <Briefcase className="size-10 text-[#7DD3FC]" />
            </div>
            <h2 className="text-6xl text-[#7DD3FC] font-mono tracking-tight">
              Lubit
            </h2>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Briefcase className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Empresa parceira do ASSERT</p>
          </div>
          
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <Code2 className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Desenvolvimento de soluções reais</p>
          </div>
          
          <div className="flex items-start gap-4 p-4 border-l-2 border-[#7DD3FC]">
            <TrendingUp className="size-6 text-[#7DD3FC] mt-1 flex-shrink-0" />
            <p className="text-xl text-gray-300">Crescimento profissional</p>
          </div>
        </div>
      </div>
      
      {/* Right placeholder */}
      <div className="w-[600px] h-[500px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative">
        <img 
          src={lubitImage} 
          alt="Trabalhando na Lubit" 
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