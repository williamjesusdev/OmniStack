module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(",").map(word => word.trim());
};
