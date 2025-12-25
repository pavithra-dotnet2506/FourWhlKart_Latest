import { useParams, Link } from "react-router-dom";
import cars from "./../data/cars.json";
//import ImageCarousel from "./../components/ImageCarousel";
import { useFavorites } from "./../context/FavoritesContext";
import { useToast } from "./../components/ToastProvider";

import { useDispatch } from "react-redux";
//import { addRecentlyViewed } from "@/store/recentlyViewedSlice";
import { addRecentlyViewed } from "../store/recentlyViewedSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "./../components/ui/button";
import CarImageCarousel from "./CarImageCarousel";

const CarDetails = () => {
  //console.log("Components >> Car details");

  const { id } = useParams();
  const car = (cars as any[]).find((c) => String(c.id) === String(id));

  // if (!id || isNaN(Number(id))) {
  //   return <NotFound />;
  // }

  const { favorites, toggleFavorite } = useFavorites();
  const { addToast } = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //console.log("Components >> Car details : " + car);

  if (!car) {
    return (
      <div className="py-10">
        {/* <h1 className="text-6xl font-bold text-red-600">404</h1> */}
        <p className="text-muted-foreground text-red-600">
          Oops!!! Something was incorrect. Please Re-check and try again...
        </p>
        {/* <Button className="bg-sky-500" asChild>
          <Link to="/">Go Home</Link>
        </Button> */}
        <Button
          variant="default"
          onClick={() => navigate(-1)}
          className="bg-sky-600 hover:bg-green-700"
        >
          Back
        </Button>
      </div>
    );
  }

  // if (!car) {
  //   return (
  //     <div className="py-10">
  //       <p className="text-red-600">Car not found.</p>
  //       <Link className="text-sky-600 underline" to="/">
  //         Back to Home
  //       </Link>
  //     </div>
  //   );
  // }
  dispatch(addRecentlyViewed(car));
  const isFav = favorites.includes(car.id);
  const onFav = () => {
    const added = toggleFavorite(car.id);
    if (added) addToast("success", "Added to Favorites");
    else addToast("danger", "Removed from Favorites");
  };

  return (
    <main className="py-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <CarImageCarousel images={car.images} />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            {car.year} {car.make} {car.model}
          </h1>
          <div className="text-sky-600 text-xl font-semibold mt-2">
            ${car.price.toLocaleString()}
          </div>
          <div className="text-gray-600 mt-2">
            {car.mileage.toLocaleString()} mi • {car.fuel} • {car.transmission}
          </div>
          <div className="text-gray-400 text-sm">{car.location}</div>
          <button
            onClick={onFav}
            className={`mt-4 rounded-xl px-4 py-2 ${
              isFav
                ? "bg-sky-600 text-white"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            {isFav ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default CarDetails;
