import axios, { CanceledError }  from 'axios';

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers: {
  //   'api-key': 'key',
  //   'Content-Type': 'application/json',
  // }
});

export { CanceledError }; 