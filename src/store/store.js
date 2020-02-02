import LocalStorageService from "../services/localStorage.service";

class Store {
  constructor() {
    this.map = new Map();
  }

  set(key, value, type) {
    this.map.set(key, {
      value,
      type,
      expire: {
        time: -1,
        trigger: undefined
      }
    });
  }

  get(key, type) {
    const data = this.map.get(key);
    if(data) {
      if(data.type === type) {
        return data.value;
      }
      else {
        throw new Error('WRONGTYPE Operation against a key holding the wrong kind of value');
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

  expire(key, time) {
    const data = this.map.get(key);
    if(data) {
      clearTimeout(data.expire.trigger);
      data.expire = {
        time: new Date().getTime() + time * 1000,
        trigger: setTimeout(() => {
          store.delete(key);
        }, Math.max(time * 1000, 0))
      }
      return 1;
    }
    else {
      return 0;
    }
  }

  getTimeout(key) {
    const data = this.map.get(key);
    if(data) {
      if(data.expire.time >= 0) {
        return Number.parseInt((data.expire.time - new Date().getTime()) / 1000);
      }
      else {
        return -1;
      }
    }
    else {
      return -2;
    }
  }

  save() {
    const tmp = new Array(...this.map);
    const data = tmp.map(d => {
      if(d[1].type === 'set') {
        d[1].value = Array.from(d[1].value);
      }
      d[1].expire.trigger = undefined;
      return d;
    });
    LocalStorageService.write('ledis-snapshot', data);
  }

  async restore() {
    const tmp = LocalStorageService.read('ledis-snapshot');
    if(tmp) {
      const data = tmp.map(d => {
        if(d[1].type === 'set') {
          d[1].value = new Set(d[1].value);
        }
        if(d[1].expire.time >= 0) {
          d[1].expire.trigger = setTimeout(() => {
            store.delete(d[0]);
          }, Math.max(Number.parseInt((d[1].expire.time - new Date().getTime())), 0))
        }
        return d;
      });
      this.map = new Map(data);
    }
  }
}

const store = new Store();
export default store;