import { ArticlesService } from "@/common/api.service";
import { FETCH_ARTICLES } from "@/store/actions.type";
import { FETCH_START, FETCH_END } from "@/store/mutations.type";

const state = {
  tags: [],
  articles: [],
  isLoading: true
};

const getters = {
  articles(state) {
    return state.articles;
  },
  isLoading(state) {
    return state.isLoading;
  },
  tags(state) {
    return state.tags;
  }
};

export const actions = {
  async [FETCH_ARTICLES]({ commit }, params) {
    commit(FETCH_START);
    return ArticlesService.query(params.type, params.filters)
      .then(({ data }) => {
        commit(FETCH_END, data);
        return data;
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, { articles, articlesCount }) {
    state.articles = articles;
    state.articlesCount = articlesCount;
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
