type Props = { value: string; onChange: (v: string) => void };
const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="w-full">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Search by make, model, or year..."
        aria-label="Search cars"
      />
    </div>
  );
};
export default SearchBar;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// type Props = { value: string; onChange: (v: string) => void };
// export default function SearchBar({ value, onChange }: Props) {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     navigate(`/cars?search=${encodeURIComponent(query)}`);
//   };

//   return (
//     <form onSubmit={handleSearch} className="max-w-3xl mx-auto mt-6 flex">
//       <div className="w-full">
//         <input
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//           placeholder="Search by make, model, or year..."
//           aria-label="Search cars"
//         />
//         <button
//           type="submit"
//           className="bg-sky-600 text-white px-6 rounded-r-lg font-semibold hover:bg-red-700"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }
