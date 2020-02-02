import { EXE_CMD } from '../config/route';
import API from './api';

const CommandAPI = async (command) => {
  try {
    const data = await new API({
      method: 'GET',
      url: EXE_CMD,
      params: {
        command
      }
    }).request();
    return data;
  }
  catch (error) {
    return API.handleError(error);
  }
}

export default CommandAPI;