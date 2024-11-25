async function fetchMultipleAPIs(urls: string[]): Promise<any[]> {
  try {
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch from ${url}: ${response.statusText}`,
          );
        }
        return response.json();
      }),
    );
    return await Promise.all(fetchPromises);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Example usage:
const apiEndpoints = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3',
];

fetchMultipleAPIs(apiEndpoints)
  .then((results) => {
    console.log('Fetched data:', results);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
