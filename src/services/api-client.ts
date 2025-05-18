import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: { key: "5b3218d75383429ead3b04218d72f849" },
});
