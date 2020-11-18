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

export const getFormattedDate = ({date, options}) => new Intl.DateTimeFormat(`en-US`, options).format(new Date(date));
