import DataType from "./DefaultType";

class LedisString extends DataType {
  constructor(value = '') {
    super({
      type: 'string',
      value: value
    });
  }
}

export default LedisString;