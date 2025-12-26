import { useParams } from "react-router-dom";
import cars from "./../data/cars.json";
// import ImageCarousel from "./../components/ImageCarousel";
// import { useFavorites } from "./../context/FavoritesContext";
// import { useToast } from "./../components/ToastProvider";

import { useDispatch, useSelector } from "react-redux";
import { addRecentlyViewed } from "./../store/recentlyViewedSlice";
import { useNavigate } from "react-router-dom";

import type { RootState } from "./../store";
import { removeFavorite, addFavorite } from "./../store/favoritesSlice";
import { Button } from "./../components/ui/button";
import { Heart } from "lucide-react";
import CarImageCarousel from "./../components/CarImageCarousel";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./../components/ui/dialog";

const CarDetails = () => {
  //console.log("Pages >> Car details : ");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const favoritesSelector = useSelector((state: RootState) => state.favorites);
  // selector

  //const isFavorite = favoritesSelector.some((c) => c.id === car.id);
  //console.log("isFavorite -- " + isFavorite);

  const car = (cars as any[]).find((c) => String(c.id) === String(id));

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

  const isFavorite = useSelector((state: RootState) =>
    state.favorites.includes(car)
  );
  // const { favorites, toggleFavorite } = useFavorites();
  // const { addToast } = useToast();

  //console.log("Pages >> Car details : " + car.make);

  dispatch(addRecentlyViewed(car));

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

  // const isFav = favorites.includes(car.id);
  // //const isFavorite = favorites.some((c) => c.id === car.id);

  // const onFav = () => {
  //   const added = toggleFavorite(car.id);
  //   if (added) addToast("success", "Added to Favorites");
  //   else addToast("danger", "Removed from Favorites");
  // };

  return (
    <main className="py-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* <ImageCarousel images={car.images} /> */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <CarImageCarousel
            images={car.images}
            title={`${car.make} ${car.model}`}
          />
        </motion.div>
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
          {/* <button
            onClick={onFav}
            className={`mt-4 rounded-xl px-4 py-2 ${
              isFav
                ? "bg-sky-600 text-white"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            {isFav ? "♥" : "♡"}
          </button> */}
          <Button
            variant={isFavorite ? "default" : "outline"}
            // onClick={() => dispatch(toggleFavorite)}
            onClick={() =>
              dispatch(isFavorite ? removeFavorite(car) : addFavorite(car))
            }
            className="flex gap-2"
          >
            {/* <Heart
              className={`h-5 w-5 ${
                isFavorite ? "fill-red-500 text-red-500" : ""
              }`}
            /> */}
            <Heart
              className={`h-5 w-5 transition ${
                isFavorite
                  ? "fill-red-500 text-red-500 scale-110"
                  : "text-muted-foreground"
              }`}
            />

            {isFavorite ? "Remove Favorite" : "Add to Favorites"}
          </Button>
          <Button
            variant="default"
            onClick={() => navigate(-1)}
            className="bg-sky-600 hover:bg-green-700"
          >
            Back
          </Button>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
            <Spec label="Engine" value={car.engine} />
            <Spec label="Fuel Type" value={car.fuel} />
            <Spec label="Transmission" value={car.transmission} />
            <Spec label="Year" value={car.year} />
            <Spec label="Mileage" value={`${car.mileage} miles`} />
            <Spec label="Ownership" value={car.ownership} />
          </div>
        </div>
        {/* <Link
          // to={`/cars/${car.id}`}
          to=""
          //className="mt-auto inline-flex justify-center rounded-xl bg-gray-900 text-white px-4 py-2 hover:bg-gray-800"
          className=" rounded-full bg-sky-500 grid place-items-center text-white font-bold"
        >
          Buy
        </Link> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-sky-600 hover:bg-green-700">Buy Now</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Purchase Request</DialogTitle>
            </DialogHeader>

            <p className="text-sm text-gray-600">
              Thank you for your interest in the{" "}
              <strong>
                {car.year} {car.make} {car.model}
              </strong>
              .
            </p>

            <p className="mt-2 text-sm">
              Our sales team will contact you shortly.
            </p>

            {/* <Button className="mt-4 w-full">Confirm</Button> */}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};
type SpecProps = {
  label: string;
  value: string | number;
};

function Spec({ label, value }: SpecProps) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

export default CarDetails;
