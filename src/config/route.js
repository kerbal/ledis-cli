export const ENDPOINT = process.env.REACT_APP_MODE === 'DEVELOPMENT' ? 'http://localhost:3001/api/' : 'https://ledis-api.herokuapp.com/api/';

export const EXE_CMD = ENDPOINT + 'execute?command=';