const state = {
  xmpp: {
    mypresence: "",
  },
};

const getters = {
  getXMPP: (state) => state.xmpp,
};

const mutations = {
  togglePresence(state, data) {
    state.xmpp.mypresence = data;
  },
};

const actions = {
  changePresence({ commit }, data) {
    commit("togglePresence", data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
