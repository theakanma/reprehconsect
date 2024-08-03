   function deepClone(obj) {
     if (obj == null || typeof obj !== 'object') {
       return obj;
     }
     const clone = Object.create(Object.getPrototypeOf(obj));
     for (let key in obj) {
       clone[key] = deepClone(obj[key]);
     }
     return clone;
   }

   const obj1 = { a: 1, b: { c: 2 } };
   const obj2 = deepClone(obj1);
   