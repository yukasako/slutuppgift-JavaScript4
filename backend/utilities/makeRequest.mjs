export const makeRequest = async (url, method, body = null) => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    throw err;
  }
};
