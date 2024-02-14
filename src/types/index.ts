export type MeaningType = {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example: string;
  }[];
};
export type WordType = {
  phonetic?: string;
  word: string;
  meanings?: MeaningType[];
  phonetics: {
    text?: string;
    audio?: string;
  }[];
};

export type RootStackParamListType = {
  MainStack: undefined;
  Login: undefined;
  TabNavigator: undefined;
  WordDetailsModal: {word: string};
};
