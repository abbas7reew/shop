// import axios from "axios";

// const api = axios.get({
//   baseURL: "http://localhost:3000",
// });

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
});

export default api;

