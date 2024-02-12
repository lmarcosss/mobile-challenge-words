import React, {useEffect} from 'react';
import {useFavoritesContext} from '@contexts';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import {useWordDetails} from '@hooks';
import {colors} from '@constants';
import {RootStackParamList} from 'navigation/root.navigator';

import style from './word-details-modal.style';

function BackButton({goBack}: any) {
  return (
    <TouchableOpacity onPress={goBack}>
      <Feather color={colors.PRIMARY_FONT} name="x" size={28} />
    </TouchableOpacity>
  );
}

function FavoriteButton({isFavorite, onFavoriteWord}: any) {
  return (
    <TouchableOpacity onPress={onFavoriteWord}>
      <FontAwesome
        solid={isFavorite}
        name="heart"
        color={colors.PRIMARY_FONT}
        size={24}
      />
    </TouchableOpacity>
  );
}

export function WordDetailsModalScreen() {
  const {handleFavoriteWord, favorites} = useFavoritesContext();
  const {setOptions, goBack} = useNavigation();
  const {params} =
    useRoute<RouteProp<RootStackParamList, 'WordDetailsModal'>>();
  const {word} = params;
  const {wordDetails, isLoading, isError} = useWordDetails(word);

  useEffect(() => {
    const isFavorite = favorites.includes(word);

    const onFavoriteWord = () => {
      handleFavoriteWord(word);
    };

    setOptions({
      title: 'Word Details',
      headerTitleStyle: style.headerTitle,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => <BackButton goBack={goBack} />,

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

  if (isLoading) {
    return (
      <View style={style.containerLoader}>
        <ActivityIndicator color={colors.SECONDARY} />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <View style={style.wordContent}>
        {isError ? (
          <>
            <Text style={style.errorTitle}>Not found the word: {word}</Text>
            <Text style={style.errorText}>Choose another word</Text>
          </>
        ) : (
          <>
            <Text style={[style.wordText, style.text]}>{word}</Text>
            <Text style={style.text}>{wordDetails?.phonetic}</Text>
          </>
        )}
      </View>
    </View>
  );
}
