import LedisString from "./LedisString";
import LedisSet from "./LedisSet";

const datatypes = {
  'string': LedisString,
  'set': LedisSet
}

export default datatypes;