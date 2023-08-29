import { createContext, ReactNode, useState } from "react";

interface FavoritesContextType {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

type Props = { children: ReactNode };

const FavoritesContextProvider = (props: Props) => {
  const [favoritesMealIds, setFavoritesMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoritesMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoritesMealIds(
      (currentFavIds) => currentFavIds.filter((mealId) => mealId !== id) //return true and keep
    );
  };

  const value = {
    ids: favoritesMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
