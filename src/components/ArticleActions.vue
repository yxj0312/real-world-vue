<template>
  <span v-if="canModify">
    <router-link class="btn btn-sm btn-outline-secondary" :to="editArticleLink">
      <i class="ion-edit"></i><span>&nbsp;Edit Article</span>
    </router-link>
    <span>&nbsp;&nbsp;</span>
    <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
      <i class="ion-trash-a"></i><span>&nbsp;Delete Article</span>
    </button>
  </span>
  <span v-else>
    <button class="btn btn-sm btn-outline-secondary" @click="toggleFollow">
      <i class="ion-plus-round"></i> <span>&nbsp;</span>
      <span v-text="followUserLabel"></span>
    </button>
    <span>&nbsp;&nbsp;</span>
    <button
      class="btn btn-sm"
      @click="toggleFavorite"
      :class="toggleFavoriteButtonClasses"
    >
      <i class="ion-heart"></i> <span>&nbsp;</span>
      <span v-text="favoriteArticleLabel" /> <span>&nbsp;</span>
      <span class="counter" v-text="favoriteCounter" />
    </button>
  </span>
</template>

<script>
import { mapGetters } from "vuex";
import {
  ARTICLE_DELETE,
  FAVORITE_ADD,
  FAVORITE_REMOVE,
  FETCH_PROFILE,
  FETCH_PROFILE_FOLLOW,
  FETCH_PROFILE_UNFOLLOW
} from "@/store/actions.type";

export default {
  name: "RwvArticleActions",
  props: {
    article: {
      type: Object,
      required: true
    },
    canModify: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_PROFILE, {
      username: this.article.author.username
    });
  },

  computed: {
    ...mapGetters(["profile", "isAuthenticated"]),
    editArticleLink() {
      return { name: "article-edit", params: { slug: this.article.slug } };
    },
    toggleFavoriteButtonClasses() {
      return {
        "btn-primary": this.article.favorited,
        "btn-outline-primary": !this.article.favortied
      };
    },
    followUserLabel() {
      return `${this.profile.following ? "Unfollow" : "Follow"} ${
        this.article.author.username
      }`;
    },
    favoriteArticleLabel() {
      return this.article.favorited ? "Unfavorite Article" : "Favorite Article";
    },
    favoriteCounter() {
      return `(${this.article.favoritesCount})`;
    }
  },
  methods: {
    toggleFavorite() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }
      const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD;
      this.$store.dispatch(action, this.article.slug);
    },
    toggleFollow() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }
      const action = this.profile.following
        ? FETCH_PROFILE_UNFOLLOW
        : FETCH_PROFILE_FOLLOW;

      this.$store.dispatch(action, { username: this.profile.username });
    },
    async deleteArticle() {
      try {
        await this.$store.dispatch(ARTICLE_DELETE, this.article.slug);
        await this.$router.push("/");
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
</script>
