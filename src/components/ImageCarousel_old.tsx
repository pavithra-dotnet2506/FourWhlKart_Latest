import { useState } from "react";
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [idx, setIdx] = useState(0);
  const go = (d: number) =>
    setIdx((p) => (p + d + images.length) % images.length);
  return (
    <div className="relative">
      <img
        src={images[idx]}
        alt={`Image ${idx + 1}`}
        className="w-full h-80 object-cover rounded-2xl border"
      />
      <button
        onClick={() => go(-1)}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 border rounded-full px-3 py-1"
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 border rounded-full px-3 py-1"
      >
        ›
      </button>
      <div className="flex gap-2 mt-3 justify-center">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-12 w-16 overflow-hidden rounded border ${
              i === idx ? "ring-2 ring-sky-500" : ""
            }`}
          >
            <img src={src} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
export default ImageCarousel;
