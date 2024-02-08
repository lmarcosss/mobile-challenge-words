import React from 'react';
import {render, userEvent, waitFor} from '@testing-library/react-native';
import {WordsList} from './words-list.component';

const words = [
  'apple',
  'arrow',
  'amazing',
  'avocado',
  'adventure',
  'alligator',
  'acoustic',
  'animate',
  'affection',
  'absorb',
] as string[];

describe('WordsList', () => {
  it('render a empty list', () => {
    const onLoadMoreItems = jest.fn();
    const words = [] as string[];

    const {getByTestId, queryByTestId} = render(
      <WordsList onLoadMoreItems={onLoadMoreItems} words={words} />,
    );

    const flatList = getByTestId('words-list');
    const listItems = queryByTestId('words-list-item');

    expect(flatList).not.toBeNull();
    expect(listItems).toBeNull();
  });

  it('render a list with 10 items', () => {
    const onLoadMoreItems = jest.fn();

    const {getAllByTestId} = render(
      <WordsList onLoadMoreItems={onLoadMoreItems} words={words} />,
    );

    const wordsListItem = getAllByTestId('words-list-item');

    expect(wordsListItem).toHaveLength(10);
  });

  it('simulate call onLoadMoreItems function', async () => {
    const onLoadMoreItems = jest.fn();
    const {getByTestId} = render(
      <WordsList onLoadMoreItems={onLoadMoreItems} words={words} />,
    );

    const wordsList = getByTestId('words-list');

    const user = userEvent.setup();
    await user.scrollTo(wordsList, {
      y: 100,
      momentumY: 100,
      contentSize: {height: 100, width: 100},
    });

    await waitFor(() => {
      expect(onLoadMoreItems).toHaveBeenCalledTimes(1);
    });
  });
});
