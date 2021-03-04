const tempConverted = (temp, deg) => {
  if (deg === 'F') {
    return Math.round((temp * 9) / 5) + 32;
  }
  return Math.round((temp - 32) * (5 / 9));
};

export default tempConverted;