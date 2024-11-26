function deepCopy(obj) {
  if (["number", "boolean", "string", "undefined", "null"].includes(typeof obj))
    return obj;

  if (Array.isArray(obj)) {
    return obj.map((e) => deepCopy(e));
  } else if (typeof obj === "object") {
    let newobj = {};
    Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepCopy(obj[key]);
      return acc;
    }, newobj);
    return newobj;
  }
}

const temp = {
  a: 5,
  b: {
    c: {
      d: 4,
      e: [3, 4, 5],
      f: 6,
    },
  },
};

console.log(temp);
console.log(deepCopy(temp));
