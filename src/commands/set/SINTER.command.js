import Command from "../DEFAULT.command";
import store from "../../store/store";

class SINTER extends Command {
  constructor() {
    super({
      name: 'SINTER',
      description: 'Set intersection among all set stored in specifie keys. Return array of members of the result set.',
      args: [{
        name: 'keys',
        type: 'array'
      }]
    });
  }

  getCommonElements(a = [], b = new Set()) {
    const common = [];
    console.log(a, b);
    a.forEach(value => {
      if(b.value.has(value)) {
        common.push(value);
      }
    });
    return common;
  }

  execute(args = []) {
    args = this.parse(args);
    const sets = [];
    for(const key of args.keys) {
      const data = store.get(key, 'set');
      if(data !== undefined) {
        sets.push(data);
      }
      else {
        return ({
          message: '(empty list or set)'
        });
      }
    }
    let common = Array.from(sets[0] ? sets[0].value : []);
    for(let i = 1; i < sets.length; i++) {
      common = this.getCommonElements(common, sets[i]);
    }
    if(common.length === 0) {
      return ({
        message: '(empty list or set)'
      });
    }
    else {
      return ({
        value: common
      })
    }
  }
}

export default SINTER;