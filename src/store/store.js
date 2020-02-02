import LocalStorageService from "../services/localStorage.service";
import datatypes from "../data types";

class Store {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    this.map.set(key, value);
  }

  get(key, type) {
    const data = this.map.get(key);
    if(data) {
      if(type) {
        if(data.type === type) {
          return data;
        }
        else {
          throw new Error('WRONGTYPE Operation against a key holding the wrong kind of value');
        }
      }
      else {
        return data;
      }
    }
    else {
      return undefined;
    }
  }

  keys() {
    return this.map.keys(); 
  }

  delete(key) {
    return this.map.delete(key);
  }

  deleteAll() {
    this.map.clear();
  }

  size() {
    return this.map.size;
  }

  has(key) {
    return this.map.has(key);
  }

  save() {
    const tmp = new Array(...this.map);
    const data = tmp.map(([key, d]) => {
      d.serialize();
      return [key, d];
    });
    LocalStorageService.write('ledis-snapshot-test', data);
  }

  restore() {
    const tmp = LocalStorageService.read('ledis-snapshot');
    if(tmp) {
      tmp.forEach(t => {
        const key = t[0];
        const raw = t[1];
        
        const d = new datatypes[raw.type]();
        d.deserialize(raw);
        if(d.expire.time >= 0) {
          d.setExpire(Math.max(0, d.getTimeout() * 1000), () => this.delete(key));
        }
        this.map.set(key, d);
      });
    }
  }
}

const store = new Store();
export default store;