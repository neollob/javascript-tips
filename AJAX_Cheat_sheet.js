// JavaScript AJAX Cheat Sheet

// 1. Basic XMLHttpRequest (Traditional Way)
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); // Set method and URL
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText)); // Parses and Logs the response
  } else {
    console.error('Request failed:', xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error('Network error');
};
xhr.send(); // Sends the request

// 2. POST Request with XMLHttpRequest
const xhrPost = new XMLHttpRequest();
xhrPost.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhrPost.setRequestHeader('Content-Type', 'application/json');
xhrPost.onload = function () {
  if (xhrPost.status === 201) {
    // 201 for created
    console.log('Data saved:', JSON.parse(xhrPost.responseText));
  }
};
const newData = JSON.stringify({
  title: 'New Post',
  body: 'This is a new post.',
});
xhrPost.send(newData); // Sends the data as JSON

// 3. Fetch API (Modern Way)
// GET request using Fetch
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json(); // Parses the JSON response
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Fetch error:', error));

// 4. POST Request using Fetch
const postData = {
  title: 'Hello World',
  body: 'This is an AJAX request using Fetch.',
};
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // Specify POST method
  headers: {
    'Content-Type': 'application/json', // Set content type to JSON
  },
  body: JSON.stringify(postData), // Send data as JSON string
})
  .then((response) => {
    if (!response.ok) throw new Error('Error saving data');
    return response.json();
  })
  .then((data) => console.log('Posted data:', data))
  .catch((error) => console.error('Error:', error));

// 5. Async/Await (Cleaner Syntax for Fetch API)
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Request failed');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData(); // Call the async function

// 6. Handling Query Parameters
const params = new URLSearchParams({ userId: 1 });
fetch(`https://jsonplaceholder.typicode.com/posts?${params}`)
  .then((response) => response.json())
  .then((data) => console.log('Filtered data:', data));

// 7. Fetch with Custom Headers (e.g., Authorization)
fetch('https://jsonplaceholder.typicode.com/posts', {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_API_TOKEN',
  },
})
  .then((response) => response.json())
  .then((data) => console.log('Data with headers:', data));

// 8. Fetching a JSON file from local storage
fetch('/data/example.json') // Make sure the file exists in your project directory
  .then((response) => response.json())
  .then((json) => console.log('Local JSON:', json))
  .catch((error) => console.error('Error fetching local file:', error));

// 9. Abort Controller (Cancel a request)
const controller = new AbortController();
fetch('https://jsonplaceholder.typicode.com/posts', {
  signal: controller.signal,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.log('Request was aborted');
    } else {
      console.error('Fetch error:', error);
    }
  });
// To cancel/abort the request
controller.abort();
