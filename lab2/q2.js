const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/todos/1",
];

Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

const fetchAll = async () => {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

fetchAll();