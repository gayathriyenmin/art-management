import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div id="about">
      <section className="py-[60px] md:py-[80px] lg:py-[150px] bg-white text-left overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: 4 Staggered Images */}
          <div className="flex gap-3 sm:gap-4 items-center justify-center h-[400px] sm:h-[500px] md:h-[600px] px-2 sm:px-4">
            <img 
              src="https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?q=80&w=400&auto=format&fit=crop" 
              alt="Art sketch portrait" 
              className="w-1/4 h-[75%] object-cover rounded-xl shadow-lg -translate-y-8" 
            />
            <img 
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=400&auto=format&fit=crop" 
              alt="Still life painting" 
              className="w-1/4 h-[85%] object-cover rounded-xl shadow-lg translate-y-6" 
            />
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop" 
              alt="Floral art" 
              className="w-1/4 h-[90%] object-cover rounded-xl shadow-lg -translate-y-4" 
            />
            <img 
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&auto=format&fit=crop" 
              alt="Classical portrait painting" 
              className="w-1/4 h-[80%] object-cover rounded-xl shadow-lg translate-y-12" 
            />
          </div>

          {/* Right Column: Text and Button */}
          <div className="max-w-lg mx-auto lg:mx-0 w-full">
            <h3 className="text-lg md:text-xl text-slate-800 mb-2 font-medium">Welcome To</h3>
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-8 font-normal tracking-wide">
              Ovya Art Academy
            </h2>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              Ovya Art Academy is a holistic institution that aims to develop skills among students in the arts of drawing, painting, mixed media, and sculpture.
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-10">
              Lessons are delivered through a number of practical projects that encourage pupils to use their creative imagination and observe the finer details of their everyday environment.
            </p>
            <button className="bg-primary hover:bg-[#b56565] text-white px-8 py-3.5 rounded text-sm font-semibold tracking-wider transition-colors shadow-md hover:shadow-lg">
              KNOW MORE
            </button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
