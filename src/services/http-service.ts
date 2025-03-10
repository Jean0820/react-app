import apiClient from "./api-client";
interface Data {
  id: number;
}
class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = <T>() => {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  };

  delete = <T extends Data>(data: T) => {
    return apiClient.delete(this.endpoint + "/" + data.id);
  };

  create = <T>(data: T) => {
    return apiClient.post<T>(this.endpoint, data);
  };

  update = <T extends Data>(data: T) => {
    return apiClient.patch(this.endpoint + "/" + data.id, data);
  };
}

const create = (endpoint: string) => new HttpService(endpoint)

export default create;
