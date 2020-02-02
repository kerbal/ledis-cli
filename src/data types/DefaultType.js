class DataType {
  constructor({ value, type = 'default type' }) {
    this.value = value;
    this.type = type;
    this.expire = {
      time: '',
      trigger: undefined
    }
  }

  setExpire(time, callback) {
    this.removeTrigger();
    this.expire = {
      time: new Date().getTime() + time * 1000,
      trigger: setTimeout(() => {
        callback();
      }, Math.max(time * 1000, 0))
    }
  }

  removeTrigger() {
    if(this.expire.trigger) {
      clearInterval(this.expire.trigger);
      this.expire.trigger = undefined;
    }
  }

  getTimeout() {
    if(this.expire.time >= 0) {
      return Number.parseInt((this.expire.time - new Date().getTime()) / 1000);
    }
    else {
      return -1;
    }
  }

  defaultSerialize() {
    this.removeTrigger();
  }

  serialize() {
    this.defaultSerialize();
  }

  deserialize({ value, expire }) {
    this.value = value;
    this.expire = expire;
  }
}

export default DataType;