import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./../components/ui/carousel";
import type { CarouselApi } from "./../components/ui/carousel";
import { cn } from "./../lib/utils";

type Props = {
  images: string[];
  title?: string;
  className?: string;
};

export default function CarImageCarousel({
  images,
  title = "Car image",
  className,
}: Props) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Keyboard support
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!api) return;
      if (e.key === "ArrowLeft") api.scrollPrev();
      if (e.key === "ArrowRight") api.scrollNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [api]);

  if (!images?.length) {
    return (
      <div
        className={cn(
          "w-full aspect-[16/10] rounded-xl bg-muted flex items-center justify-center",
          className
        )}
      >
        <span className="text-sm text-muted-foreground">
          No images available
        </span>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Main Carousel */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={src + i}>
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Next/Prev */}
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
      </Carousel>

      {/* Thumbnails */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {images.map((src, i) => {
          const active = i === selectedIndex;
          return (
            <button
              key={"thumb-" + src + i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border transition",
                active
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border hover:border-primary/60"
              )}
              aria-label={`Go to image ${i + 1}`}
            >
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {active && <span className="absolute inset-0 bg-primary/5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
