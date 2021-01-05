function duplicateLetters(...args) {
  const obj = {};
  args[0].split("").forEach(key => {
    if (obj[key]) obj[key] += 1;
    else obj[key] = 1;
  });

  const maxCount = Math.max(...Object.values(obj));
  return maxCount > 1 ? maxCount : false;
}

export { duplicateLetters };
