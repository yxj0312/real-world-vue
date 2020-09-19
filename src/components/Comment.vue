<template>
  <div>
    <form class="card comment-form" @submit.prevent="onSubmit(slug, comment)">
      <div class="card-block">
        <label for="commentEditor" hidden>Comment</label>
        <textarea
          id="commentEditor"
          class="form-control"
          v-model="comment.body"
          placeholder="Write a comment..."
          rows="3"
          :readonly="!isCurrentUser"
        ></textarea>
      </div>
      <div class="card-footer">
        <router-link
          class="comment-author"
          :to="{
            name: 'profile',
            params: { username: comment.author.username }
          }"
        >
          <img
            :src="comment.author.image"
            class="comment-author-img"
            alt="comment author image"
          />
          {{ comment.author.username }}
        </router-link>
        <span class="date-posted">{{ comment.createdAt | date }}</span>
        <button class="btn btn-outline-danger" v-if="isCurrentUser">
          <i class="ion-trash-a" @click="destroy(slug, comment.id)"></i>
        </button>
        <button class="btn btn-outline-primary" v-if="isCurrentUser">
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { COMMENT_CREATE, COMMENT_DESTROY } from "@/store/actions.type";

export default {
  name: "RwvComment",
  props: {
    slug: { type: String, required: true },
    comment: { type: Object, required: true }
  },
  computed: {
    isCurrentUser() {
      if (this.currentUser.username && this.comment.author.username) {
        return this.comment.author.username === this.currentUser.username;
      }
      return false;
    },
    ...mapGetters(["currentUser"])
  },
  methods: {
    async destroy(slug, commentId) {
      await this.$store.dispatch(COMMENT_DESTROY, { slug, commentId });
      await this.$router.go(0);
    },
    // TODO: Refactor
    async onSubmit(slug, comment) {
      await this.$store.dispatch(COMMENT_CREATE, { slug, comment });
    }
  }
};
</script>

<style>
.card-text {
  color: black;
}
button {
  margin: 0.225rem;
}
</style>
