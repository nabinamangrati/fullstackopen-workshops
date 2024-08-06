import axios from "axios";

export const getNotes = () =>
  axios.get("http://localhost:3001/api/notes").then((res) => {
    // for (let i = 0; i < 1000000000; i++) {}
    return res.data;
  });
