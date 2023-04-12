export const formatCardNumber = (value) => {
  return value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
};