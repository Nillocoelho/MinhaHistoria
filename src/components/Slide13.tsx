import { GraduationCap, Brain, Target } from 'lucide-react';

export default function Slide13() {
  return (
    <div className="h-full p-16 flex flex-col justify-center items-center">
      {/* Title */}
      <div className="w-full space-y-4 mb-12">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-[#7DD3FC]"></div>
          <span className="text-[#7DD3FC] font-mono tracking-wider">OBJETIVO FUTURO</span>
        </div>
        
        <h2 className="text-5xl text-[#7DD3FC] font-mono tracking-tight">
          Próximo Passo: Mestrado PPGTI
        </h2>
        
        <div className="h-px w-full bg-gradient-to-r from-[#7DD3FC] to-transparent"></div>
      </div>
      
      {/* Icons row */}
      <div className="flex gap-8 mb-12">
        <div className="p-6 border-2 border-[#7DD3FC] rounded-lg">
          <GraduationCap className="size-12 text-[#7DD3FC]" />
        </div>
        <div className="p-6 border-2 border-[#7DD3FC] rounded-lg">
          <Brain className="size-12 text-[#7DD3FC]" />
        </div>
        <div className="p-6 border-2 border-[#7DD3FC] rounded-lg">
          <Target className="size-12 text-[#7DD3FC]" />
        </div>
      </div>
      
      {/* Theme description */}
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <p className="text-sm text-[#7DD3FC] font-mono tracking-wider">TEMA DE PESQUISA</p>
          <h3 className="text-3xl text-white leading-relaxed">
            IA como ferramenta adaptativa para<br />apoiar alunos neurodivergentes
          </h3>
        </div>
        
        {/* Quote */}
        <div className="p-8 border-2 border-[#7DD3FC] bg-[#7DD3FC]/5 rounded-lg">
          <p className="text-3xl text-[#7DD3FC] font-mono italic text-center">
            "Tecnologia com propósito<br />transforma realidades."
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-32 h-32 border-l-2 border-t-2 border-[#7DD3FC] opacity-20"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-[#7DD3FC] opacity-20"></div>
    </div>
  );
}
