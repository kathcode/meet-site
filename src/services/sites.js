const BASE_PATH = 'http://localhost:3000';


export const SiteService = {
  getSites: async () => {
    const URL = `${BASE_PATH}/sites`;
  
    try {
      const response = await fetch(URL);
      const sites = await response.json();
      return sites;
    } catch (error) {
      throw Error(error);
    }
  }
}