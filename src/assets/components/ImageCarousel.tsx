import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group">
      <div className="relative h-[400px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Cabinet vue ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-6 h-6 text-amber-900" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-6 h-6 text-amber-900" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-amber-600 w-4'
                : 'bg-white/80 hover:bg-white'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}