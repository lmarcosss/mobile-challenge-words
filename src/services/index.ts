import axios, {AxiosInstance} from 'axios';

export abstract class BaseService {
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(url: string): Promise<T> {
    return this.api.get(url);
  }

  async post<T>(url: string, data: any): Promise<T> {
    return this.api.post(url, data);
  }

  async delete<T>(url: string): Promise<T> {
    return this.api.delete(url);
  }
}
