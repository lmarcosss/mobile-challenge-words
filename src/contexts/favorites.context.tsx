import React, {useCallback, useContext, useEffect} from 'react';
import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysEnum} from '@constants';

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

  useEffect(() => {
    async function getData() {
      const favoritesList = await AsyncStorage.getItem(
        StorageKeysEnum.FAVORITES_LIST,
      );

      if (favoritesList) {
        setFavorites(JSON.parse(favoritesList));
      } else {
        AsyncStorage.setItem(
          StorageKeysEnum.FAVORITES_LIST,
          JSON.stringify(favorites),
        );
      }
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFavoriteWord = useCallback(
    (favoriteWord: string) => {
      const hasFavoriteWord =
        favorites.findIndex(item => item === favoriteWord) !== -1;

      let newFavoritesList;

      if (hasFavoriteWord) {
        newFavoritesList = favorites.filter(item => item !== favoriteWord);
      } else {
        newFavoritesList = [favoriteWord, ...favorites];
      }

      setFavorites(newFavoritesList);
      AsyncStorage.setItem(
        StorageKeysEnum.FAVORITES_LIST,
        JSON.stringify(newFavoritesList),
      );
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
