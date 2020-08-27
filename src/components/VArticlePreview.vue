<template>
  <div class="article-preview">
    <RwvArticleMeta isPreview :article="article" />
    <router-link :to="articleLink" class="preview-link">
      <h1 v-text="article.title" />
      <p v-text="article.description" />
      <span>Read more...</span>
      <TagList :tags="article.taglist" />
    </router-link>
  </div>
</template>

<script>
import RwvArticleMeta from "@/components/ArticleMeta";
import TagList from "@/components/TagList";

export default {
  name: "RwvArticlePreview",
  components: {
    RwvArticleMeta,
    TagList
  },
  props: {
    article: { type: Object, required: true }
  },
  computed: {
    articleLink() {
      return {
        name: "article",
        params: {
          slug: this.article.slug
        }
      };
    }
  }
};
</script>
