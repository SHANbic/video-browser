import axios from "axios";
const KEY = "AIzaSyAvggMJI_z3bQPe5rRxC6mYL2H6H97c-Lk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
