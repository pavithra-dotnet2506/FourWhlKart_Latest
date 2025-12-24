import { useMemo, useState } from "react";
import SearchBar from "./../components/SearchBar";
import CarCard from "./../components/CarCard";
import cars from "./../data/cars.json";
import HomeTabs from "./../components/HomeTabs";
import RecentlyViewed from "./../components/RecentlyViewed";

const Home = () => {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return (cars as any[]).filter((c) => {
      const text = `${c.make} ${c.model} ${c.year}`.toLowerCase();
      return text.includes(q.toLowerCase());
    });
  }, [q]);

  return (
    <main className="py-4 md:py-6">
      {/* <div className="mb-4">
        <SearchBar value={q} onChange={setQ} />
      </div> */}
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div> */}
      {/* Hero Section */}
      <HomeTabs />
      {/* <RecentlyViewed /> */}
    </main>
  );
};
export default Home;
