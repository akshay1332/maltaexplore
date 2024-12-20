import React from 'react';

type ImageWithOverlayProps = {
  src: string;
  alt: string;
  priority?: boolean;
  overlay?: boolean;
  className?: string;
};

export const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({ 
  src, 
  alt, 
  priority = false, 
  overlay = false, 
  className = '' 
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover ${overlay ? 'opacity-70' : ''}`}
        loading={priority ? 'eager' : 'lazy'}
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}
    </div>
  );
};
