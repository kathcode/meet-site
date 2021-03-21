const BASE_PATH = 'http://localhost:3000';


export const SiteService = {
  getSites: async (page = 1, limit = 6) => {
    const URL = `${BASE_PATH}/sites?_page=${page}&_limit=${limit}`;
  
    try {
      const response = await fetch(URL);
      const sites = await response.json();
      return sites;
    } catch (error) {
      throw Error(error);
    }
  },

  getSite: async (id) => {
    const URL = `${BASE_PATH}/sites/${id}`;
  
    try {
      const response = await fetch(URL);
      const sites = await response.json();
      return sites;
    } catch (error) {
      throw Error(error);
    }
  }
}