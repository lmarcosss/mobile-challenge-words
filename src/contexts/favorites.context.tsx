import React, {useCallback, useContext} from 'react';
import {createContext, useState} from 'react';

type DefaultValueType = {
  favorites: string[];
  handleFavoriteWord(favoriteWord: string): void;
};

const defaultValue = {} as DefaultValueType;

const FavoritesContext = createContext(defaultValue);

type FavoritesContextProviderProps = {
  children: JSX.Element;
};

export function FavoritesContextProvider({
  children,
}: FavoritesContextProviderProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFavoriteWord = useCallback(
    (favoriteWord: string) => {
      const hasFavoriteWord =
        favorites.findIndex(item => item === favoriteWord) !== -1;

      if (hasFavoriteWord) {
        setFavorites(favorites.filter(item => item !== favoriteWord));
      } else {
        setFavorites([favoriteWord, ...favorites]);
      }
    },
    [favorites],
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        handleFavoriteWord,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      'useFavoritesContext must be used within the scope of FavoritesContextProvider',
    );
  }

  return context;
}
