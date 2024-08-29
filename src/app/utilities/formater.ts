export const formatAmount = (value: string | number) => {
  if (isNaN(Number(value))) return "";
  const result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return result;
};

export const textShortner = (value: string) => {
  const valueLen = value.length;
  return `${value.slice(0, 4)}...${value.slice(valueLen - 5, valueLen - 1)}`;
};
