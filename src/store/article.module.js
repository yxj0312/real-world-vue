import { ArticlesService } from "@/common/api.service";
import { FETCH_ARTICLE } from "@/store/actions.type";
import { SET_ARTICLE } from "@/store/mutations.type";

const initialState = {
  article: {
    author: {},
    title: "",
    description: "",
    body: "",
    tagList: []
  },
  comments: []
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_ARTICLE](context, articleSlug, prevArticle) {
    // avoid extronuous network call if article exists
    if (prevArticle !== undefined) {
      return context.commit(SET_ARTICLE, prevArticle);
    }
    const { data } = await ArticlesService.get(articleSlug);
    context.commit(SET_ARTICLE, data.article);
    return data;
  }
};

const getters = {
  article(state) {
    return state.article;
  }
};

export const mutations = {
  [SET_ARTICLE](state, article) {
    state.article = article;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
