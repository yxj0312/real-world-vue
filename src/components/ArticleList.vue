<template>
  <div>
    <div v-if="isLoading" class="article-preview">Loading articles...</div>
    <div v-else>
      <div v-if="articles.length === 0" class="article-preview">
        No articles are here... yet.
      </div>
      <RwvArticlePrview
        v-for="(article, index) in articles"
        :article="article"
        :key="article.title + index"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RwvArticlePrview from "./VArticlePreview";

export default {
  name: "RwvArticleList",
  components: {
    RwvArticlePrview
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    }
  },
  computed: {
    ...mapGetters(["isLoading"])
  }
};
</script>
