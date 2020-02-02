import DataType from "./DefaultType";

class LedisSet extends DataType {
  constructor() {
    super({
      type: 'set',
      value: new Set()
    });
  }

  add(values = []) {
    let count = 0;
    values.forEach(v => {
      if(!this.value.has(v)) {
        this.value.add(v);
        count++;
      }
    });
    return count;
  }

  get() {
    return Array.from(this.value);
  }

  remove(values = []) {
    let count = 0;
    values.forEach(v => {
      if(this.value.delete(v)) {
        count++;
      }
    });
    return count;
  }

  serialize() {
    this.defaultSerialize();
    this.value = this.get();
  }

  deserialize({ value, expire }) {
    this.value = new Set(value);
    this.expire = expire;
  }
}

export default LedisSet;