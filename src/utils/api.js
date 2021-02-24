export const fetchData = async (url) => {
  try {
    let response = await fetch(url);
    if (!response.status === 200)
      // or check for response.status
      throw new Error(response.statusText);
    let body = await response.json();
    return body;
  } catch (err) {
    console.log(err);
    return;
  }
};
