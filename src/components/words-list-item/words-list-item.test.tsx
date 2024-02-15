import React from 'react';
import {act, render, userEvent, waitFor} from '@testing-library/react-native';
import {WordsListItem} from '@components';

jest.useFakeTimers();

describe('WordsListItem', () => {
  it('render the component', () => {
    const onPress = jest.fn();

    const {getByTestId} = render(
      <WordsListItem onPress={onPress} item="test-item" />,
    );

    const wordsListItem = getByTestId('words-list-item');

    expect(wordsListItem).not.toBeNull();
  });

  it('calls onPress with the expected item when TouchableOpacity is pressed', () => {
    const onPress = jest.fn();

    const {getByTestId} = render(
      <WordsListItem item="test-item" onPress={onPress} />,
    );

    const wordsListItem = getByTestId('words-list-item');

    act(() => {
      userEvent.press(wordsListItem);
    });

    waitFor(() => {
      expect(onPress).toHaveBeenCalledWith('test-item');
    });
  });
});
