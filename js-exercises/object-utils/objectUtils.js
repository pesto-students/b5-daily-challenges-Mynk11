// your implementation

const map = (objectToBeModified, callback) => {
  try {
    let temporaryArray = [];
    if (
      typeof objectToBeModified !== "object" ||
      Object.keys(objectToBeModified).length < 0
    )
      throw "Please pass an valid javascript object";
    for (const entryToBeModify of Object.entries(objectToBeModified)) {
      temporaryArray.push(callback(entryToBeModify));
    }
    return Object.fromEntries(temporaryArray);
  } catch (err) {
    console.log("Error::", err);
  }
};

const invert = obj => {
  let resultantObject = {};
  for (const [key, value] of Object.entries(obj)) {
    resultantObject[value] = key;
  }

  return resultantObject;
};

const filter = (obj, callback) => {
  let result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (callback([key, value])) {
      result[key] = value;
    }
  }
  return result;
};

export { map, invert, filter };
//filter,merge,all,some
