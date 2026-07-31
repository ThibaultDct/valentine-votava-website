import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isPaused]);

  const goToNext = () => setCurrentIndex((current) => (current + 1) % images.length);
  const goToPrevious = () => setCurrentIndex((current) => (current - 1 + images.length) % images.length);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-amber-100 shadow-lift"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative aspect-[4/3]">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Le cabinet, vue ${index + 1} sur ${images.length}`}
            aria-hidden={index !== currentIndex}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Voile bas, pour que les pastilles restent lisibles sur photo claire */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-amber-950/40 to-transparent"
          aria-hidden="true"
        />
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2.5 text-amber-900 opacity-0 shadow-soft backdrop-blur-sm transition-all hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
        aria-label="Image précédente"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2.5 text-amber-900 opacity-0 shadow-soft backdrop-blur-sm transition-all hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
        aria-label="Image suivante"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
