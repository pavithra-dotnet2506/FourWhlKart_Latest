import { useState } from "react";
import CarCard from "./CarCard";
import allCars from "./../data/cars.json";
import RecentlyViewed from "@/components/RecentlyViewed";
import { useFavorites } from "./../context/FavoritesContext";

import { useSelector } from "react-redux";
import type { RootState } from "../store";

type Tab = "viewed" | "favorites" | "searched" | "recommended";
//type Tab = "viewed" | "searched" | "recommended";

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("viewed");
  const cars = allCars as any[];
  const recentlyViewedCars = useSelector(
    (state: RootState) => state.recentlyViewed
  );

  const favorites = useSelector((state: RootState) => state.favorites);

  console.log("favCars1 >> " + favorites.length);

  //const { favorites } = useFavorites();
  //const favCars = (cars as any[]).filter((c) => favorites.includes(c.id));
  const favCars = (cars as any[]).filter((c) => favorites.includes(c.id));

  const viewedCars = recentlyViewedCars.slice(0, 10);
  console.log("viewedCars >> " + viewedCars.length);

  // console.log("**favCars** >> " + favCars);

  const favoriteCars = favorites.slice(0, 10);
  const searchedCars = cars.slice(8, 12);
  const recommendedCars = cars.slice(12, 16);
  // const searchedCars = cars.slice(4, 8);
  // const recommendedCars = cars.slice(8, 12);

  const getCars = () => {
    switch (activeTab) {
      case "viewed":
        return viewedCars;
      case "favorites":
        return favoriteCars;
      case "searched":
        return searchedCars;
      case "recommended":
        return recommendedCars;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 mt-12">
      {/* Tabs */}
      <div className="flex gap-6 border-b">
        <TabButton
          label="Viewed"
          active={activeTab === "viewed"}
          onClick={() => setActiveTab("viewed")}
        />
        <TabButton
          label="Favorites"
          active={activeTab === "favorites"}
          onClick={() => setActiveTab("favorites")}
        />
        <TabButton
          label="Searched"
          active={activeTab === "searched"}
          onClick={() => setActiveTab("searched")}
        />
        <TabButton
          label="You Might Like"
          active={activeTab === "recommended"}
          onClick={() => setActiveTab("recommended")}
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {getCars().length > 0
          ? getCars().map((car) => <CarCard key={car.id} car={car} />)
          : "Sorry, No Cars to display."}

        {/* {getCars.length > 0
          ? getCars().map((car) => <CarCard key={car.id} car={car} />)
          : "No Cars to display"} */}

        {/* {favCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))} */}
      </div>
    </section>
  );
};

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 text-sm font-semibold transition
        ${
          active
            ? "border-b-2 border-red-600 text-red-600"
            : "text-gray-500 hover:text-gray-800"
        }
      `}
    >
      {label}
    </button>
  );
}
export default HomeTabs;
