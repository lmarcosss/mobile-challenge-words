import React from 'react';
import {Text, View} from 'react-native';
import {MeaningType} from '@types';

import style from './meanings-list.style';

type MeaningsListProps = {
  meanings?: MeaningType[];
};

export function MeaningsList({meanings}: MeaningsListProps) {
  if (!meanings?.length) {
    return null;
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Meanings</Text>
      <View style={style.content}>
        {meanings.map((meaning, index) => (
          <Text style={style.partOfSpeech} key={index}>
            {meaning.partOfSpeech}:{' '}
            <Text style={style.definitions}>
              {meaning.definitions.map((item, definitionIndex) => (
                <Text key={definitionIndex}>
                  {item.definition}
                  {'\n'}
                </Text>
              ))}
            </Text>
          </Text>
        ))}
      </View>
    </View>
  );
}
