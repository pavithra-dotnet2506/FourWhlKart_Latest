import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import cars from "./../data/cars.json";
import CarCard from "./../components/CarCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./../components/ui/pagination";

//import SearchBar from "./../components/SearchBar";

const unique = (arr: string[]) => Array.from(new Set(arr)).sort();

const Cars = () => {
  /**  Search Bar **/
  // const [q, setQ] = useState("");

  // const filtered = useMemo(() => {
  //   return (cars as any[]).filter((c) => {
  //     const text = `${c.make} ${c.model} ${c.year}`.toLowerCase();
  //     return text.includes(q.toLowerCase());
  //   });
  // }, [q]);
  /**  Search Bar **/

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";

  const allCars = cars as any[];
  // START - Pagination
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allCars.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCars = allCars.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  // END - Pagination
  const makes = unique(allCars.map((c) => c.make));
  const fuels = unique(allCars.map((c) => c.fuel));
  const transmissions = unique(allCars.map((c) => c.transmission));
  const maxPrice = Math.max(...allCars.map((c) => c.price));
  const maxMileage = Math.max(...allCars.map((c) => c.mileage));

  const [make, setMake] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [trans, setTrans] = useState("All");
  const [price, setPrice] = useState(maxPrice);
  const [mileage, setMileage] = useState(maxMileage);

  // if (search) {
  //   const filtered = cars.filter((car) =>
  //     `${car.make} ${car.model} ${car.year}`.toLowerCase().includes(search)
  //   );
  // } else {
  const filtered = useMemo(
    () =>
      allCars.filter((c) => {
        const okMake = make === "All" || c.make === make;
        const okFuel = fuel === "All" || c.fuel === fuel;
        const okTrans = trans === "All" || c.transmission === trans;
        return (
          okMake &&
          okFuel &&
          okTrans &&
          c.price <= price &&
          c.mileage <= mileage
        );
      }),
    [allCars, make, fuel, trans, price, mileage]
  );
  //}

  return (
    <main className="py-6">
      {/* START - Search Filters */}
      {/*
      <div className="bg-white border rounded-2xl p-4 shadow-sm mb-6">
        
         <div className="grid md:grid-cols-5 gap-4">
          <div>
            <label className="text-xs text-gray-500">Make / Brand</label>
            <select
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="w-full mt-1 rounded-xl border px-3 py-2"
            >
              <option>All</option>
              {makes.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500">Fuel</label>
            <select
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              className="w-full mt-1 rounded-xl border px-3 py-2"
            >
              <option>All</option>
              {fuels.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500">Transmission</label>
            <select
              value={trans}
              onChange={(e) => setTrans(e.target.value)}
              className="w-full mt-1 rounded-xl border px-3 py-2"
            >
              <option>All</option>
              {transmissions.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 flex justify-between">
              <span>Max Price</span>
              <span className="text-gray-700">${price.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="0"
              max={maxPrice}
              step="500"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-full mt-2"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 flex justify-between">
              <span>Max Mileage</span>
              <span className="text-gray-700">
                {mileage.toLocaleString()} mi
              </span>
            </label>
            <input
              type="range"
              min="0"
              max={maxMileage}
              step="1000"
              value={mileage}
              onChange={(e) => setMileage(parseInt(e.target.value))}
              className="w-full mt-2"
            />
          </div> 
          
        </div>
      </div>*/}
      {/* End - Search Filters */}
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Available Cars</h1>

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"> */}
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {/* <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        > */}
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        {/* </motion.div> */}
      </div>
      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
};
export default Cars;
