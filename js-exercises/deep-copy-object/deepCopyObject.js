const checkForValidObject = objToCopy => {
  return (
    typeof objToCopy === "object" &&
    !Array.isArray(objToCopy) &&
    objToCopy !== null
  );
};
const getCurrentPropertyDescriptor = (objToCopy, key) => {
  return Object.getOwnPropertyDescriptor(objToCopy, key);
};
const deepCopyObject = (objToCopy, copyDescriptors = false) => {
  if (!checkForValidObject(objToCopy)) {
    return objToCopy;
  }

  const copiedObject = {};
  Object.getOwnPropertyNames(objToCopy).forEach(key => {
    copiedObject[key] = deepCopyObject(objToCopy[key], copyDescriptors);
    if (copyDescriptors) {
      Object.defineProperty(
        copiedObject,
        key,
        getCurrentPropertyDescriptor(objToCopy, key)
      );
    }
  });

  return copiedObject;
};

export { deepCopyObject };
