import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
