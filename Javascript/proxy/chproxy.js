function enableNegIndexing(targetArr) {
  return new Proxy(targetArr, {
    get(target, prop) {
      if (!isNaN(prop)) { // if prop is a number-like key
        let index = Number(prop);
        if (index < 0) {
          // convert -1 → last element, -2 → second last, etc.
          index = target.length + index;
        }
        return target[index];
      }
      return target[prop]; // fallback for normal properties (like "length")
    },
    set(target, prop, value) {
      if (!isNaN(prop)) {
        let index = Number(prop);
        if (index < 0) {
          index = target.length + index;
        }
        target[index] = value;
        return true;
      }
      target[prop] = value;
      return true;
    }
  });
}
