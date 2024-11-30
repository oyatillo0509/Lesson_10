import { ArrowDown } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { PageIndicator } from './PageIndicator';

export function Hero() {
  return (
    <div id="hero" className="relative h-[100vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/img/BG Hero.svg'), url('/src/img/MG.svg') , url('/src/img/VG.svg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-[1px] w-16 bg-yellow-400" />
            <span className="text-yellow-400 uppercase tracking-widest text-sm">
              A Hiking guide
            </span>
            <div className="h-[1px] w-16 bg-yellow-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Be Prepared For The Mountains And Beyond!
          </h1>

          <div className="flex items-center justify-center mt-12 ">
            <span className="mr-2 text-sm uppercase cursor-pointer hover:text-yellow-400">
              scroll down
            </span>
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <PageIndicator />
      <SocialLinks />
    </div>
  );
}