import Command from "../DEFAULT.command";
import store from "../../store/store";
import LedisSet from "../../data types/LedisSet";

class SADD extends Command {
  constructor() {
    super({
      name: 'SADD',
      description: 'Add values to set stored at key.',
      args: [{
        name: 'key',
        type: 'string',
      }, {
        name: 'values',
        type: 'array'
      }]
    });
  }

  execute(args = []) {
    args = this.parse(args);
    let data = store.get(args.key, 'set');

    if(data === undefined) {
      data = new LedisSet();
      store.set(args.key, data, 'set');
    }

    const count = data.add(args.values);

    return ({
      value: count
    });
  }
}

export default SADD;