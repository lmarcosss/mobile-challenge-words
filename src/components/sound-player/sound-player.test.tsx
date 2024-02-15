import React from 'react';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import {SoundPlayer} from '@components';

describe('SoundPlayer', () => {
  it('render the component', () => {
    const mock = {
      isPlaying: true,
      currentTime: 0,
      duration: 0,
      isAvailable: true,
      onPlayPause: jest.fn(),
    };

    const {queryByTestId} = render(<SoundPlayer {...mock} />);

    const soundPlayer = queryByTestId('sound-player');
    const soundPlayerError = queryByTestId('sound-player-error');

    expect(soundPlayerError).toBeNull();
    expect(soundPlayer).not.toBeNull();
  });

  it('render the error component', () => {
    const mock = {
      isPlaying: true,
      currentTime: 0,
      duration: 0,
      isAvailable: false,
      onPlayPause: jest.fn(),
    };

    const {queryByTestId} = render(<SoundPlayer {...mock} />);

    const soundPlayerError = queryByTestId('sound-player-error');
    const soundPlayer = queryByTestId('sound-player');

    expect(soundPlayerError).not.toBeNull();
    expect(soundPlayer).toBeNull();
  });

  it('render the component and press onPlayPause one time', () => {
    const mock = {
      isPlaying: true,
      currentTime: 0,
      duration: 0,
      isAvailable: true,
      onPlayPause: jest.fn(),
    };

    const {getByTestId} = render(<SoundPlayer {...mock} />);

    const soundPlayerButton = getByTestId('sound-player-button');

    act(() => {
      fireEvent.press(soundPlayerButton);
    });

    waitFor(() => {
      expect(mock.onPlayPause).toHaveBeenCalledTimes(1);
    });
  });

  it('render the component and press onPlayPause and change the value isPlaying', () => {
    let isPlaying = false;

    const onPlayPause = jest.fn(() => {
      isPlaying = !isPlaying;
    });

    const mock = {
      currentTime: 0,
      duration: 0,
      isAvailable: true,
    };

    const {getByTestId} = render(
      <SoundPlayer isPlaying={isPlaying} onPlayPause={onPlayPause} {...mock} />,
    );

    const soundPlayerButton = getByTestId('sound-player-button');

    act(() => {
      fireEvent.press(soundPlayerButton);
    });

    waitFor(() => {
      expect(onPlayPause).toHaveBeenCalledTimes(1);
      expect(isPlaying).toBeTruthy();
    });
  });
});
