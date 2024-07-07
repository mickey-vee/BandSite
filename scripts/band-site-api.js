const apiKey = "f2db11a6-a4e5-44d7-b2f5-65ce233efbf8";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com/`;
  }
  async postComment(name, comment) {
    try {
      const response = await axios.post(
        `${this.baseUrl}comments/?api_key=${apiKey}`,
        {
          name: name,
          comment: comment,
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const comments = response.data;

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}

const api = new BandSiteApi(apiKey);

api.getComments(); /* 
api.postComment("test", "123"); */

export default BandSiteApi;
