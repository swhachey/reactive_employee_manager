import axios from "axios";

export default {
  search: function(query) {
    return axios.get("https://randomuser.me/api/?results=" + query);
  }
};
