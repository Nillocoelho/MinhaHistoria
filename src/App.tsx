import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './components/ui/button';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
import Slide9 from './components/Slide9';
import Slide10 from './components/Slide10';
import Slide11 from './components/Slide11';
import Slide12 from './components/Slide12';
import Slide17 from './components/Slide17';
import Slide13 from './components/Slide13';
import Slide14 from './components/Slide14';
import Slide15 from './components/Slide15';
import Slide16 from './components/Slide16';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
    <Slide10 key="10" />,
    <Slide11 key="11" />,
    <Slide12 key="12" />,
    <Slide17 key="17" />,
    <Slide13 key="13" />,
    <Slide14 key="14" />,
    <Slide15 key="15" />,
    <Slide16 key="16" />,
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#7DD3FC 1px, transparent 1px), linear-gradient(90deg, #7DD3FC 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Slide container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-7xl aspect-video bg-black border-2 border-[#7DD3FC] rounded-lg shadow-[0_0_30px_rgba(125,211,252,0.3)] relative overflow-hidden">
          {slides[currentSlide]}
          
          {/* Slide counter */}
          <div className="absolute bottom-6 right-6 text-[#7DD3FC] font-mono">
            {(currentSlide + 1).toString().padStart(2, '0')} / {slides.length.toString().padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-transparent border-2 border-[#7DD3FC] text-[#7DD3FC] hover:bg-[#7DD3FC] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="size-4" />
        </Button>
        
        <div className="flex gap-2 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-[#7DD3FC]' 
                  : 'w-2 bg-[#7DD3FC] opacity-30 hover:opacity-60'
              }`}
            />
          ))}
        </div>
        
        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-transparent border-2 border-[#7DD3FC] text-[#7DD3FC] hover:bg-[#7DD3FC] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}