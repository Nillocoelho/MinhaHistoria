import { Cpu } from 'lucide-react';
import ifpbLogo from 'figma:asset/166bf941901ca3968f9a466cf0bc8f1ea272136c.png';

export default function Slide1() {
  return (
    <div className="h-full p-16 flex items-center justify-between">
      {/* Left content */}
      <div className="flex-1 space-y-8">
        {/* Tech icon */}
        <div className="inline-block p-4 border-2 border-[#7DD3FC] rounded-lg">
          <Cpu className="size-12 text-[#7DD3FC]" />
        </div>
        
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">APRESENTAÇÃO</span>
          </div>
          
          <h1 className="text-6xl text-[#7DD3FC] font-mono tracking-tight leading-tight">
            Da Automação à IA<br />Aplicada à Educação
          </h1>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
          
          <p className="text-2xl text-gray-400 font-mono">
            Minha trajetória acadêmica no IFPB
          </p>
        </div>
        
        {/* Author */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-[#7DD3FC] rounded-full animate-pulse"></div>
            <span className="text-sm text-[#7DD3FC] font-mono">AUTOR</span>
          </div>
          <p className="text-xl text-white font-mono">Danillo Coelho Barbosa</p>
        </div>
      </div>
      
      {/* Right placeholder */}
      <div className="w-[550px] h-[600px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative flex items-center justify-center">
        <img 
          src={ifpbLogo} 
          alt="IFPB - Instituto Federal da Paraíba" 
          className="w-[90%] h-[90%] object-contain"
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