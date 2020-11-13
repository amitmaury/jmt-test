const BASE_URL = "https://reqres.in/";

type Config = {
    baseUrl: string;
  };
  
  const config: Partial<Config> = {
    baseUrl: BASE_URL
  }
export default config;