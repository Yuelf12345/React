function add(...args) {
  return function (...args2) {
    if (args2.length) {
      return add(...args, ...args2)
    } else {
      let res = 0
      for (let i = 0; i < args.length; i++) {
        res += args[i]
      }
      return res
    }
  }
}

console.log(add(1)(2)(3, 4)());// 10
console.log(add(1)(2)(3)());// 6