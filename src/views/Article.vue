<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{ article.title }</h1>
        <RwvArticleMeta :article="article" :actions="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    ...mapGetters(["article"])
  }
};
</script>
