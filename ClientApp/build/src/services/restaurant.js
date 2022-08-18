import http from "../http-common";
const URL = "http://localhost:5000/api/v1";
class RestaurantDataService {
  async getAll(page = 0) {
    /*return await fetch(URL + '/reviews', {
      method: 'get',
      mode: "cors",
      
      body: JSON.stringify({
       name: data.name,
   
      }),
    })*/
    return http.get(`restaurants?page=${page}`);
  }

  async get(id) {
    
    return http.get(`/id/${id}`);
  }

  async find(query, by = "name", page = 0) {
    return http.get(`api/v1/restaurants/search`);
  } 

  async createReview(data) {
    return await fetch(URL + '/reviews', {
      method: 'POST',
      mode: "cors",
      headers: {
        Authorization: `Bearer ${data.jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        restaurant_id: data.restaurant_id,
        name: data.name,
        text: data.text,
      }),
    })
    
  }

  async updateReview(data) {
    return await fetch(URL + '/reviews', {
      method: 'PUT',
      mode: "cors",
      headers: {
        Authorization: `Bearer ${data.jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        review_id: data.review_id,
        name: data.name,
        text: data.text,
      }),
    })
    
  }

  async deleteReview(id, jwt ) {
    
    return await fetch(URL + '/reviews', {
    method: 'DELETE',
      mode: "cors",
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment_id : id,
      }),
    })
  }

 /* getGenres(id) {
    return http.get(`/genres`);
  }*/

}

export default new RestaurantDataService();
