<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <RwvArticleMeta :article="article" :actions="true" />
      </div>
      <div class="container page">
        <div class="row article-content">
          <div class="col-xs-12">
            <div v-html="parseMarkdown(article.body)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import marked from "marked";
import store from "@/store";
import RwvArticleMeta from "@/components/ArticleMeta";
import { FETCH_ARTICLE } from "@/store/actions.type";

export default {
  components: { RwvArticleMeta },
  beforeRouteEnter(to, from, next) {
    Promise.all([store.dispatch(FETCH_ARTICLE, to.params.slug)]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["article", "currentUser", "isAuthenticated"])
  },
  methods: {
    parseMarkdown(content) {
      return marked(content);
    }
  }
};
</script>
