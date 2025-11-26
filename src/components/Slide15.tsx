import { Sparkles } from 'lucide-react';

export default function Slide15() {
  return (
    <div className="h-full p-16 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 size-2 bg-[#7DD3FC] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 size-2 bg-[#7DD3FC] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 size-2 bg-[#7DD3FC] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 size-2 bg-[#7DD3FC] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Top decorative line */}
      <div className="mb-12">
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#7DD3FC] to-transparent"></div>
      </div>
      
      {/* Icon */}
      <div className="mb-12 relative">
        <div className="size-24 border-4 border-[#7DD3FC] rounded-full flex items-center justify-center">
          <Sparkles className="size-12 text-[#7DD3FC]" />
        </div>
        <div className="absolute inset-0 border-4 border-[#7DD3FC] rounded-full animate-ping opacity-20"></div>
      </div>
      
      {/* Main quote */}
      <div className="max-w-5xl text-center space-y-8 relative z-10">
        <div className="space-y-2">
          <p className="text-sm text-[#7DD3FC] font-mono tracking-wider">MENSAGEM FINAL</p>
        </div>
        
        <h1 className="text-6xl text-[#7DD3FC] font-mono leading-tight tracking-tight">
          O IFPB mudou minha vida —<br />
          porque eu permiti<br />
          que mudasse.
        </h1>
        
        <div className="flex justify-center gap-2 pt-8">
          <div className="h-1 w-12 bg-[#7DD3FC]"></div>
          <div className="h-1 w-12 bg-[#7DD3FC] opacity-60"></div>
          <div className="h-1 w-12 bg-[#7DD3FC] opacity-30"></div>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="mt-12">
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#7DD3FC] to-transparent"></div>
      </div>
      
      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-40 h-40 border-l-2 border-t-2 border-[#7DD3FC] opacity-20"></div>
      <div className="absolute bottom-8 right-8 w-40 h-40 border-r-2 border-b-2 border-[#7DD3FC] opacity-20"></div>
    </div>
  );
}
