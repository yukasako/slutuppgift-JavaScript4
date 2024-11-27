export const fetchData = async (CartOrProducts: string) => {
  console.log('Fetch is running');
  const res = await fetch(`http://localhost:3001/${CartOrProducts}`);
  const data = await res.json();
  return data;
};
