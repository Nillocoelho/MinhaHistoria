import { Users, MessageSquare, Target, Briefcase } from 'lucide-react';

export default function Slide7() {
  const skills = [
    { icon: MessageSquare, text: 'Comunicação' },
    { icon: Users, text: 'Liderança' },
    { icon: Target, text: 'Inovação' },
    { icon: Briefcase, text: 'Trabalho sob pressão' },
  ];

  return (
    <div className="h-full p-16 flex flex-col justify-center">
      {/* Title */}
      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-[#7DD3FC]"></div>
          <span className="text-[#7DD3FC] font-mono tracking-wider">DESENVOLVIMENTO</span>
        </div>
        
        <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
          Soft Skills & PBL — Embrapii
        </h2>
        
        <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4 p-6 border-2 border-[#7DD3FC] rounded-lg hover:bg-[#7DD3FC]/5 transition-colors">
            <div className="p-3 border-2 border-[#7DD3FC] rounded-lg">
              <skill.icon className="size-6 text-[#7DD3FC]" />
            </div>
            <p className="text-lg text-gray-300">{skill.text}</p>
          </div>
        ))}
      </div>
      
      {/* Additional points */}
      <div className="space-y-4 mb-12">
        <div className="flex items-start gap-3">
          <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
          <p className="text-lg text-gray-300">Treinamento em comunicação, liderança e inovação</p>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="size-2 bg-[#7DD3FC] rounded-full mt-2"></div>
          <p className="text-lg text-gray-300">Projetos reais da indústria</p>
        </div>
      </div>
      
      {/* Quote */}
      <div className="p-6 border-l-4 border-[#7DD3FC] bg-[#7DD3FC]/5">
        <p className="text-3xl text-[#7DD3FC] font-mono italic">
          "Soft skills abriram portas que o código ainda não abria."
        </p>
      </div>
    </div>
  );
}
