export type WordType = {
  phonetic: string;
  word: string;
  meanings: any;
  phonetics: {
    text: string;
    audio?: string;
  }[];
};
