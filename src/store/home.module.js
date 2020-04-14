import {
  FETCH_PEOPLE_LIST,
  FETCH_CONNECTION_LIST,
  UPDATE_CONNECTION_TYPE,
  UPDATE_END
} from "./actions.type";
import { SET_PEOPLE_LIST, SET_CONNECTION_LIST } from "./mutations.type";
import { PeopleService, ConnectionService } from "@/common/api.service";

const state = {
  people: [],
  connections: [],
  updateSucessful: false
};

const getters = {
  people(state) {
    return state.people;
  },
  connections(state) {
    return state.connections;
  }
};

const actions = {
  [FETCH_PEOPLE_LIST]({ commit }) {
    return PeopleService.getAll().then(({ data }) => {
      commit(SET_PEOPLE_LIST, data);
    });
  },
  [FETCH_CONNECTION_LIST]({ commit }) {
    return ConnectionService.getAll().then(({ data }) => {
      commit(SET_CONNECTION_LIST, data);
    });
  },
  [UPDATE_CONNECTION_TYPE]({ commit }, payload) {
    return ConnectionService.updateConnectionType(
      payload.id,
      payload.type
    ).then(() => {
      commit(UPDATE_END);
    });
  }
};

const mutations = {
  [SET_PEOPLE_LIST](state, people) {
    state.people = people;
  },
  [SET_CONNECTION_LIST](state, connections) {
    state.connections = connections;
  },
  [UPDATE_END]() {}
};

export default {
  state,
  getters,
  actions,
  mutations
};
