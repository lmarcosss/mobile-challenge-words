import React from 'react';
import {render} from '@testing-library/react-native';
import {MeaningsList} from '@components';

const meanings = [
  {
    partOfSpeech: 'test-part-of-speech',
    definitions: [
      {
        definition: 'test-definition',
        example: 'test-example',
      },
    ],
  },
];

describe('MeaningsList', () => {
  it('not render the component when send empty list', () => {
    const {queryByTestId} = render(<MeaningsList meanings={[]} />);

    const meaningsList = queryByTestId('meanings-list');

    expect(meaningsList).toBeNull();
  });

  it('render the component with one item', () => {
    const {queryByTestId, queryAllByTestId} = render(
      <MeaningsList meanings={meanings} />,
    );

    const meaningsList = queryByTestId('meanings-list');
    const meaningsItem = queryAllByTestId('meanings-item');

    expect(meaningsList).not.toBeNull();
    expect(meaningsItem).toHaveLength(1);
  });
});
