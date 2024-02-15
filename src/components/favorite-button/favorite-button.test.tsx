import React from 'react';
import {act, render, userEvent, waitFor} from '@testing-library/react-native';
import {FavoriteButton} from '@components';

jest.useFakeTimers();

describe('FavoriteButton', () => {
  it('render the button not favorited', () => {
    const onFavoriteWord = jest.fn();

    const {getByTestId} = render(
      <FavoriteButton isFavorite={false} onFavoriteWord={onFavoriteWord} />,
    );

    const favoriteButton = getByTestId('favorite-button');

    expect(favoriteButton).not.toBeNull();
  });

  it('press onFavoriteWord and change value of isFavorite to true', () => {
    let isFavorite = false;

    const onFavoriteWord = jest.fn(() => {
      isFavorite = true;
    });

    const {getByTestId} = render(
      <FavoriteButton
        isFavorite={isFavorite}
        onFavoriteWord={onFavoriteWord}
      />,
    );

    const favoriteButton = getByTestId('favorite-button');

    act(() => {
      userEvent.press(favoriteButton);
      jest.advanceTimersByTime(500);
    });

    waitFor(() => {
      expect(onFavoriteWord).toHaveBeenCalledTimes(1);
      expect(isFavorite).toBeTruthy();
    });
  });

  it('press onFavoriteWord and change value of isFavorite to false', async () => {
    let isFavorite = true;

    const onFavoriteWord = jest.fn(() => {
      isFavorite = false;
    });

    const {getByTestId} = render(
      <FavoriteButton
        isFavorite={isFavorite}
        onFavoriteWord={onFavoriteWord}
      />,
    );

    const favoriteButton = getByTestId('favorite-button');

    await act(async () => {
      userEvent.press(favoriteButton);
      jest.advanceTimersByTime(500);

      await waitFor(() => {
        expect(onFavoriteWord).toHaveBeenCalledTimes(1);
        expect(isFavorite).toBeFalsy();
      });
    });
  });
});
