import Vue from "vue";

export const ApiService = {
  get(path) {
    return Vue.axios.get(`${path}`).catch(err => {
      throw new Error(`ApiService ${err}`);
    });
  },

  post(path, params) {
    return Vue.axios.post(`${path}`, params);
  },

  put(path, params) {
    return Vue.axios.put(`${path}`, params);
  },

  patch(path, params) {
    return Vue.axios.patch(`${path}`, params);
  }
};

export const PeopleService = {
  getAll() {
    return ApiService.get("people");
  }
};

export const ConnectionService = {
  getAll() {
    return ApiService.get("connections");
  },
  updateConnectionType(id, connection_type) {
    return ApiService.patch(`connections/${id}`, {
      connection_type
    });
  }
};
