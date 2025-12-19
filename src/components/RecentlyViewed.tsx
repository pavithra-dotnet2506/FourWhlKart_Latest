import { useSelector } from "react-redux";
import type { RootState } from "../store";
import CarCard from "./CarCard";

export default function RecentlyViewed() {
  const cars = useSelector((state: RootState) => state.recentlyViewed);

  //nsole.log(" Recently Viewed Cars length " + cars.length);

  if (cars.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
