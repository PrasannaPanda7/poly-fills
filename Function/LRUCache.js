class LRUCacheO1 {
  constructor(capacity = 5) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  //get the cached value
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    // delete from current position and add in the latest
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  //put a new value
  put(key, val) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // delete the least used one
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, val);
  }
}

class LRUCacheOn {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = []; // [ {key: , val: }, ...]
  }

  get(key) {
    const index = this.cache.findIndex((el) => el.key === key);
    if (index === -1) return -1;
    const currItem = this.cache.splice(index, 1);
    this.cache.push(...currItem);
    return currItem[0].val;
  }

  put(key, val) {
    const index = this.cache.findIndex((el) => el.key === key);
    if (index !== -1) {
      this.cache.splice(index, 1);
    }
    this.cache.push({ key, val });

    if (this.cache.length > this.capacity) {
      this.cache.shift();
    }
  }
}

const cache = new LRUCacheOn(3);

cache.put("A", 6);
cache.put("B", 66);
cache.put("C", 666);
console.log(cache.get("A"));
cache.put("D", 6666);
