import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div id="about">
      {/* Mission / Values Statement */}
      <section className="py-20 md:py-28 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              Our Creed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mt-4 mb-6 leading-tight">
              Honoring Tradition. Exploring Innovation.
            </h2>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              At   Academy, we believe that high-quality artistic training is built upon foundations established over centuries. We combine strict, classical anatomy and color-theory lessons with modern digital brushwork and 3D concept designs.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              Whether you are preparing a gallery exhibition or building an industry-standard animation portfolio, our masters work individually with you to build your unique voice.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=600&auto=format&fit=crop"
              alt="Art Studio"
              className="rounded-3xl shadow-xl w-full aspect-4/3 object-cover"
            />
            {/* Ambient blur blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-highlight/10 rounded-3xl -z-10 blur-xl scale-105" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
