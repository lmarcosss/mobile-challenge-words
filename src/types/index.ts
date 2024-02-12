export type WordType = {
  phonetic: string;
  word: string;
  meanings: any;
  phonetics: {
    text: string;
    audio?: string;
  }[];
};

export type RootStackParamListType = {
  MainStack: undefined;
  Login: undefined;
  TabNavigator: undefined;
  WordDetailsModal: {word: string};
};
