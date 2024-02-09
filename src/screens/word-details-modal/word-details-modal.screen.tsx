import {useWordDetailsContext} from '@contexts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {WordService} from 'services/words';
import {WordType} from 'tyoes';

import style from './word-details-modal.style';

function GoBackButton({goBack}: any) {
  return (
    <TouchableOpacity onPress={goBack}>
      <Text>X</Text>
    </TouchableOpacity>
  );
}

const wordService = new WordService();

export function WordDetailsModalScreen() {
  const {word, addWordToHistory} = useWordDetailsContext();
  const {setOptions, goBack} = useNavigation();
  const [details, setDetails] = useState<WordType>();

  useEffect(() => {
    setOptions({
      title: '',
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => <GoBackButton goBack={goBack} />,
    } as NativeStackNavigationOptions);
  }, [setOptions, word, goBack]);

  useEffect(() => {
    async function getData() {
      const {data} = await wordService.getWordDetails(word);
      const [wordDetails] = data;

      setDetails(wordDetails);
    }

    if (word) {
      getData();

      addWordToHistory(word);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  return (
    <View style={style.container}>
      <View style={style.wordContent}>
        <Text style={style.wordText}>{details?.word}</Text>
        <Text style={style.wordPhonetic}>{details?.phonetic}</Text>
      </View>
    </View>
  );
}
