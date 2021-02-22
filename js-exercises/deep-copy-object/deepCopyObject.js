/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line quotes
const lodash = require("lodash");

// eslint-disable-next-line arrow-body-style
const deepCopyObject = (objToCopy) => {
  return lodash.cloneDeep(objToCopy);
};

export { deepCopyObject };
