import axios from 'axios';
import { EXE_CMD } from '../config/route';

const CommandAPI = async (command) => {
  try {
    const response = await axios({
      method: 'GET',
      url: EXE_CMD + command,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  }
  catch (error) {
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
    })
  }
}

export default CommandAPI;