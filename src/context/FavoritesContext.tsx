import { createContext, useContext, useEffect, useState } from "react";

type FavContextType = {
  favorites: number[];
  toggleFavorite: (id: number) => boolean;
};
const FavContext = createContext<FavContextType | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const raw = localStorage.getItem("favorites");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    let added = false;
    setFavorites((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      added = true;
      return [...prev, id];
    });
    return added;
  };

  return (
    <FavContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
