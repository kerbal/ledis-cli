class LocalStorageService {
  static read (key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static write(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }
}

export default LocalStorageService;