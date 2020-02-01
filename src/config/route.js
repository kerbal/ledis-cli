export const ENDPOINT = process.env.REACT_APP_MODE === 'DEVELOPMENT' ? 'http://localhost:3001/api/' : '';

export const EXE_CMD = ENDPOINT + 'execute?command=';