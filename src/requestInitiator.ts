import { AxiosError, AxiosInstance } from 'axios';
import { writeFileSync } from 'fs';
import { APIRequestError } from './errors/apirequesterror';

export class RequestInitiator {
  constructor(protected instance: AxiosInstance, protected config: Map<string, string | boolean>) {}

  protected async _query<Type>(gqlQuery: any): Promise<Type> {
    writeFileSync('./last-call-request.json', JSON.stringify(gqlQuery, null, 2));
    let response = null;
    try {
      response = await this.instance.post('', JSON.stringify(gqlQuery), {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.config.get('apiKey'),
        },
      });
    } catch (error: any) {
      const axiosError: AxiosError = error;
      throw new APIRequestError({
        request: axiosError.config.data,
        data: axiosError.response?.data,
        statusCode: axiosError.response ? axiosError.response.status : 0,
        msg: axiosError.response?.statusText,
      });
    }

    const jsonObj: Type = response.data;
    return jsonObj;
  }
}
