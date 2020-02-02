import Command from "../DEFAULT.command";
import store from "../../store/store";

class SREMOVE extends Command {
  constructor() {
    super({
      name: 'SREM',
      description: 'Remove values from set',
      args: [{
        name: 'key',
        type: 'string',
      }, {
        name: 'values',
        type: 'array'
      }]
    })
  }

  execute(args = []) {
    args = this.parse(args);
    const data = store.get(args.key, 'set');
    if(data !== undefined) {
      const count = data.remove(args.values);
      return ({
        value: count
      }); 
    }
    else {
      return ({
        value: 0
      }); 
    }
  }
}

export default SREMOVE;