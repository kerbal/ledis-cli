export const ENDPOINT = process.env.REACT_APP_MODE === 'DEVELOPMENT' ? 'http://localhost:3001/' : 'https://ledis-api.herokuapp.com/';

export const EXE_CMD = 'execute?command=:command';
export const HELP = 'help';