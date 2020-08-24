const state = {
  tags: [],
  isLoading: true
};

const getters = {
  tags(state) {
    return state.tags;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

export default {
  state,
  getters
};
