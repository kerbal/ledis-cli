import commands from "../commands";
import stringArgv from 'string-argv';

class CommandService {
  static execute(command) {
    try {
      const parsed = stringArgv(command);
      const c = parsed[0].toUpperCase();
      const args = parsed.slice(1, parsed.length);
      if(commands.hasOwnProperty(c)) {
        const response = commands[c].execute(args);
        return ({
          success: true,
          ...response
        });
      }
      else {
        throw new Error(`ERR unknown command ${c}`);
      }
    }
    catch (error) {
      return ({
        message: error.message,
        success: false
      });
    }
  }
}

export default CommandService;