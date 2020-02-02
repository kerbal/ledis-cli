import { HELP } from '../config/route';
import API from './api';

const HelpAPI = async () => {
  try {
    const data = await new API({
      method: 'get',
      url: HELP
    }).request();
    return data;
  }
  catch (error) {
    return API.handleError(error);
  }
}

export default HelpAPI;