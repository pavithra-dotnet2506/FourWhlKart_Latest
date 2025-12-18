import { Link } from "react-router-dom";
import { useFavorites } from "./../context/FavoritesContext";
//import cars from '@/data/cars.json'
import cars from "./../data/cars.json";
import CarCard from "./../components/CarCard";

const Favorites = () => {
  const { favorites } = useFavorites();
  const favCars = (cars as any[]).filter((c) => favorites.includes(c.id));

  return (
    <main className="py-6">
      {favCars.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600">No favorites yet.</p>
          <Link className="text-sky-600 underline" to="/">
            Browse cars
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {favCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </main>
  );
};
export default Favorites;
