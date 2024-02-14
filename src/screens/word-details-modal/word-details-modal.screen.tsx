import React, {useEffect} from 'react';
import {useFavoritesContext} from '@contexts';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {View, Text, ActivityIndicator} from 'react-native';
import {colors} from '@constants';
import {useSoundPlayer, useWordDetails} from '@hooks';
import {RootStackParamListType} from '@types';
import {FavoriteButton, GoBackButton, SoundPlayer} from '@components';

import style from './word-details-modal.style';

export function WordDetailsModalScreen() {
  const {handleFavoriteWord, favorites} = useFavoritesContext();
  const {setOptions, goBack} = useNavigation();
  const {params} =
    useRoute<RouteProp<RootStackParamListType, 'WordDetailsModal'>>();
  const {word} = params;
  const {wordDetails, isLoading, isError} = useWordDetails(word);

  const phonetic = wordDetails?.phonetics.reduce(
    (accumulator, currentValue) => {
      if (currentValue?.text) {
        accumulator = {...accumulator, text: currentValue?.text};
      }

      if (currentValue?.audio) {
        accumulator = {...accumulator, audio: currentValue?.audio};
      }

      return accumulator;
    },
    {text: wordDetails?.phonetic},
  );

  const {
    isPlaying,
    currentTime,
    duration,
    onPlayPause,
    isAvailable,
    isLoading: isLoadingAudio,
  } = useSoundPlayer(phonetic?.audio);

  useEffect(() => {
    const isFavorite = favorites.includes(word);

    const onFavoriteWord = () => {
      handleFavoriteWord(word);
    };

    setOptions({
      title: 'Word Details',
      headerTitleStyle: style.headerTitle,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => <GoBackButton goBack={goBack} />,

      headerRight: !isError
        ? () => (
            <FavoriteButton
              isFavorite={isFavorite}
              onFavoriteWord={onFavoriteWord}
            />
          )
        : undefined,
    } as NativeStackNavigationOptions);
  }, [setOptions, word, goBack, favorites, handleFavoriteWord, isError]);

  const isLoadingScreen = isLoading || isLoadingAudio;

  if (isLoadingScreen) {
    return (
      <View style={style.containerLoader}>
        <ActivityIndicator color={colors.SECONDARY} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={[style.wordContent, style.errorContent]}>
        <Text style={style.errorTitle}>Not found the word: {word}</Text>
        <Text style={style.errorText}>Choose another word</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <View style={style.wordContent}>
        <Text style={[style.wordText, style.text]}>{word}</Text>
        <Text style={style.text}>{phonetic?.text}</Text>

        <SoundPlayer
          isAvailable={isAvailable}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onPlayPause={onPlayPause}
        />
      </View>
    </View>
  );
}
