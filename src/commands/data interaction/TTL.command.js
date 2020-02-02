import Command from "../DEFAULT.command";
import store from "../../store/store";

class TTL extends Command {
  constructor() {
    super({
      name: 'TTL',
      description: 'Return the timeout of a key.',
      args: [{
        name: 'key',
        type: 'string'
      }]
    });
  }

  execute(args = []) {
    args = this.parse(args);
    const data = store.get(args.key);
    let result;
    if(data) {
      result = data.getTimeout();
    }
    else {
      result = -2;
    }
    return ({
      value: result
    });
  }
}

export default TTL;