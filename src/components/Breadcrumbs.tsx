import { Link, useLocation, useParams } from "react-router-dom";
import cars from "./../data/cars.json";

const Breadcrumbs = () => {
  const location = useLocation();
  const params = useParams();
  const segments = location.pathname.split("/").filter(Boolean);

  const parts: { name: string; to: string }[] = [{ name: "Home", to: "/" }];
  if (segments[0] === "cars") {
    parts.push({ name: "Cars", to: "/cars" });
    if (params.id) {
      const car = (cars as any[]).find(
        (c) => String(c.id) === String(params.id)
      );
      parts.push({
        name: car ? `${car.year} ${car.make} ${car.model}` : "Details",
        to: location.pathname,
      });
    }
  } else if (segments[0] === "favorites") {
    parts.push({ name: "Favorites", to: "/favorites" });
  } else if (segments[0] === "about") {
    parts.push({ name: "About", to: "/about" });
  } else if (segments[0] === "contact") {
    parts.push({ name: "Contact Us", to: "/contact" });
  }

  return (
    <div className="text-sm text-gray-500 mt-3 mb-4">
      <nav className="flex items-center gap-2 flex-wrap">
        {parts.map((p, idx) => (
          <span key={idx} className="flex items-center gap-2">
            {idx > 0 && <span>/</span>}
            {idx < parts.length - 1 ? (
              <Link to={p.to} className="hover:text-gray-800">
                {p.name}
              </Link>
            ) : (
              <span className="text-gray-800">{p.name}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
};
export default Breadcrumbs;
