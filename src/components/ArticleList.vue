<template>
  <div>
    <div v-if="isLoading" class="article-preview">Loading articles...</div>
    <div v-else>
      <div v-if="articles.length === 0" class="article-preview">
        No articles are here... yet.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RwvArticleList",
  components: {},
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
