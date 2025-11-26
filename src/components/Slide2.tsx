import { User, Search, Users, Code } from 'lucide-react';
import profileImage from 'figma:asset/0862bc657bc2b0745b2b17e362659943a378d891.png';

export default function Slide2() {
  const items = [
    { icon: User, text: 'Estudante de Sistemas para Internet (IFPB)' },
    { icon: Search, text: 'Atuação em Pesquisa, Inovação e Tecnologia' },
    { icon: Users, text: 'Ex-membro ASSERT' },
    { icon: Code, text: 'Desenvolvedor' },
  ];

  return (
    <div className="h-full p-16 flex gap-12">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-[#7DD3FC]"></div>
            <span className="text-[#7DD3FC] font-mono tracking-wider">PERFIL</span>
          </div>
          
          <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
            Quem Sou Eu
          </h2>
          
          <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
        </div>
        
        {/* Items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="p-3 border-2 border-[#7DD3FC] rounded-lg group-hover:bg-[#7DD3FC] transition-colors">
                <item.icon className="size-6 text-[#7DD3FC] group-hover:text-black transition-colors" />
              </div>
              <p className="flex-1 text-lg text-gray-300 pt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right placeholder */}
      <div className="w-[500px] flex items-center justify-center">
        <div className="w-full h-[550px] border-2 border-[#7DD3FC] rounded-lg overflow-hidden relative">
          <img 
            src={profileImage} 
            alt="Foto profissional" 
            className="w-full h-full object-cover"
          />
          
          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[#7DD3FC]"></div>
          <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-[#7DD3FC]"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[#7DD3FC]"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[#7DD3FC]"></div>
        </div>
      </div>
    </div>
  );
}