export type ConfigType = {
  method?: string;
  headers?: HeadersInit;
  url: string;
  host?: string;
};
export default class Req {
  config: ConfigType;

  constructor(config: ConfigType) {
    this.config = Object.assign(
      {},
      {
        method: 'GET',
        url: '/',
        headers: {
          'Content-Type': 'application/json',
        },
        host: '/',
      },
      config
    );
  }
  fetch(data: object | undefined): Promise<any> {
    // if (!/^(http)/.test(url)) {
    //   url = this.config.host + url;
    // }
    const { headers, method, host, url } = this.config;
    return new Promise((resolve, reject) => {
      useFetch(url, {
        onRequest({ request, options }) {
          // 设置请求头
          options.baseURL = host;
          options.headers = headers || {};
          options.method = method;
          if (method && method.toLocaleLowerCase() === 'get') {
            options.params = data;
          } else {
            options.body = data;
          }
        },
      })
        .then((res) => {
          const data: any = res.data.value;
          if (data.code === 200) {
            resolve(data.data);
          } else {
            reject(data);
          }
        })
        .catch(reject);
    });
  }
}
