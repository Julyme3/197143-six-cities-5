export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const compare = (a, b) => {
  if (a.diff > b.diff) {
    return 1;
  }

  if (a.diff < b.diff) {
    return -1;
  }

  return 0;
};
