export const fetchData = async (CartOrProducts: string) => {
  const res = await fetch(`http://localhost:3001/${CartOrProducts}`);
  const data = await res.json();
  return data;
};
