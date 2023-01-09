import axios from "axios";
import { BASEURI } from "./baseURI";

const post = (collection, data) => {
  var res = axios.post(BASEURI + collection, data);
  return res;
};

export { post };
