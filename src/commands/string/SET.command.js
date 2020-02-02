import Command from "../DEFAULT.command";
import store from "../../store/store";
import LedisString from "../../data types/LedisString";

class SET extends Command {
  constructor() {
    super({
      name: 'SET',
      description: 'Get a string value at key.',
      args: [{
        name: 'key',
        type: 'string'
      }, {
        name: 'value',
        type: 'string'
      }]
    });
  }

  execute(args = []) {
    args = this.parse(args);
    store.set(args.key, new LedisString(args.value));
    return ({
      message: 'OK'
    });
  }
}

export default SET;