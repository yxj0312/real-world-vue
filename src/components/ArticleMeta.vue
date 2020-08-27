<template>
  <div class="article-meta">
    <router-link
      :to="{ name: 'profile', params: { username: article.author, username } }"
    >
      <img :src="article.author.image" alt="author image" />
    </router-link>
    <div class="info">
      <router-link
        :to="{ name: 'profile', params: { username: article.author.username } }"
      >
        {{ article.author.username }}
      </router-link>
      <span class="date">{{ article.createdAt | date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RwvArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>
