import React from 'react';
import {act, render, userEvent, waitFor} from '@testing-library/react-native';
import {GoBackButton} from '@components';

jest.useFakeTimers();

describe('GoBackButton', () => {
  it('render the button', () => {
    const goBack = jest.fn();

    const {getByTestId} = render(<GoBackButton goBack={goBack} />);

    const favoriteButton = getByTestId('go-back-button');

    expect(favoriteButton).not.toBeNull();
  });

  it('press goBack one time', () => {
    const goBack = jest.fn();

    const {getByTestId} = render(<GoBackButton goBack={goBack} />);

    const favoriteButton = getByTestId('go-back-button');

    act(() => {
      userEvent.press(favoriteButton);
    });

    waitFor(() => {
      expect(goBack).toHaveBeenCalledTimes(1);
    });
  });
});
