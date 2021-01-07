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
export { map };
//filter, invert, merge, all, some
