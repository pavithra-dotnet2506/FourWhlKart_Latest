import { Link } from "react-router-dom";
// import { useFavorites } from "./../context/FavoritesContext";
// import { useToast } from "./ToastProvider";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./../store";
import { removeFavorite, addFavorite } from "./../store/favoritesSlice";

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  images: string[];
  mileage: number;
  fuel: string;
  transmission: string;
  location: string;
  engine: string;
  ownership: string;
  image: string;
};

const CarCard = ({ car }: { car: Car }) => {
  // const { favorites, toggleFavorite } = useFavorites();
  // const { addToast } = useToast();
  const dispatch = useDispatch();
  const isFav = useSelector((state: RootState) =>
    state.favorites.includes(car)
  );

  //const isFav = favorites.includes(car.id);

  // const onFav = () => {
  //   const added = toggleFavorite(car.id);
  //   if (added) addToast("success", "Added to Favorites");
  //   else addToast("danger", "Removed from Favorites");
  // };
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
      <div className="relative" onClick={() => navigate(`/cars/${car.id}`)}>
        <img
          src={car.images[0]}
          alt={`${car.make} ${car.model}`}
          className="h-48 w-full object-cover"
        />
        {/* <button
          // onClick={onFav}
          onClick={() =>
            dispatch(isFav ? removeFavorite(car) : addFavorite(car))
          }
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium ${
            isFav ? "bg-sky-600 text-white" : "bg-white/90 text-gray-800 border"
          }`}
        >
          {isFav ? "♥ Saved" : "♡ Save"}
        </button> */}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold">
            {car.year} {car.make} {car.model}
          </h3>
          <div className="text-sky-600 font-semibold">
            ${car.price.toLocaleString()}
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          {car.mileage.toLocaleString()} mi • {car.fuel} • {car.transmission}
        </div>
        <div className="text-xs text-gray-400">{car.location}</div>
        <Link
          to={`/cars/${car.id}`}
          className="mt-auto inline-flex justify-center rounded-xl bg-gray-900 text-white px-4 py-2 hover:bg-gray-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
