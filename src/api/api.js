import axios from 'axios';
import { ENDPOINT } from '../config/route';

class API {
  constructor ({ method, url = '', params = {}, data = {}, auth }) {
    this.url = ENDPOINT + 'api/' + url;
    this.params = params;
    this.data = data;
    this.method = method;
    this.headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }

  createPackage () {
    for(const p in this.params) {
      this.url = this.url.replace(`:${p}`, this.params[p]);
    }
    return ({
      url: this.url,
      method: this.method,
      headers: this.headers,
      data: this.data
    });
  }

  async createRequest () {
    const response = await axios(this.createPackage());
    return response.data;
  }

  async request () {
    const data = await this.createRequest();
    return data;
  }

  static handleError (error) {
    if(error.response) {
      error = error.response;
    }
    let message;
    try {
      message = error.data.message;
    }
    catch (e) {
      message = error.message;
    }
    return ({
      success: false,
      message
    });
  }
}

export default API;