import axios, {AxiosInstance} from 'axios';

export class DictionaryService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.DICTIONARY_API,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getWordDetails(word: string): Promise<any> {
    return this.api.get(`/${word}`);
  }
}
