import {BaseService} from './';
import {DICTIONARY_API} from '@env';

export class WordService extends BaseService {
  constructor() {
    super(DICTIONARY_API);
  }

  async get(word: string): Promise<any> {
    return this.get(`/${word}`);
  }
}
