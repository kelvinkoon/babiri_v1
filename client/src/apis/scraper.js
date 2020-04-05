import axios from "axios";

export default axios.create({
  baseURL: ENDPOINT_URL,
  params: {}
});
