const allPromises = promises => {
  if (!promises || promises.length === 0) return Promise.resolve();
  const result = [];
  for (const promise of promises) {
    console.log("promises1===>", promises);

    if (promise instanceof Promise) {
      promise.then(resolved => {
        result.push(resolved);
      });
      // .catch(rejected => {
      //   return Promise.reject(rejected);
      // });
    } else {
      Promise.resolve(promise).then(resolved => {
        result.push(resolved);
      });
    }
  }

  return result;
};

export { allPromises };
