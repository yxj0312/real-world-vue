import { ArticlesService, FavoriteService } from "@/common/api.service";
import {
  FETCH_ARTICLE,
  FAVORITE_ADD,
  FAVORITE_REMOVE
} from "@/store/actions.type";
import { SET_ARTICLE, UPDATE_ARTICLE_IN_LIST } from "@/store/mutations.type";

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
  },
  async [FAVORITE_ADD](context, slug) {
    const { data } = await FavoriteService.add(slug);
    context.commit(UPDATE_ARTICLE_IN_LIST, data.article, { root: true });
    context.commit(SET_ARTICLE, data.article);
  },
  async [FAVORITE_REMOVE](context, slug) {
    const { data } = await FavoriteService.remove(slug);
    // Update list as well. This allows us to favorite an article in the Home view.
    context.commit(UPDATE_ARTICLE_IN_LIST, data.article, { root: true });
    context.commit(SET_ARTICLE, data.article);
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
