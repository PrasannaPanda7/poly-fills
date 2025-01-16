function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    // as typeof null = undefined
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((e) => deepCopy(e));
  } else if (typeof obj === "object") {
    let newobj = {};
    Object.keys(obj).forEach((key) => {
      newobj[key] = deepCopy(obj[key]);
    });
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
