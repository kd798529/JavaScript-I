// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  const objKeys = keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    const key = objKeys[i];
    newObj[key] = cb(obj[key]);
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const arr = [];
  const objKeys = keys(obj);
  const objVals = values(obj);
  let innerArr = [];
  for (let i = 0; i < objKeys.length; i++) {
    innerArr.push(objKeys[i], objVals[i]);
    arr.push(innerArr);
    innerArr = [];
  }
  return arr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  const objKeys = keys(obj);
  const objVals = values(obj);
  for (let i = 0; i < objKeys.length; i++) {
    const hereKey = objKeys[i];
    const hereValue = objVals[i];
    newObj[hereValue] = hereKey;
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultKeys = keys(defaultProps);
  const defaultVals = values(defaultProps);
  for (let i = 0; i < defaultKeys.length; i++) {
    if (obj[defaultKeys[i]] === undefined) {
      obj[defaultKeys[i]] = defaultVals[i];
    }
  }
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
