export const fetchMarket = async () => {
  const res = await fetch("/api/market");
  const result = await res.json();
  return result;
};
