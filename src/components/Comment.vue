<template>
  <div>
    <form class="card comment-form" @submit.prevent="">
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
  <!--  <RwvCommentEditor-->
  <!--    :slug="slug"-->
  <!--    :user-image="comment.author.image"-->
  <!--    :user-name="comment.author.username"-->
  <!--    :content="comment"-->
  <!--  />-->
  <!--  <div class="card">-->
  <!--    <div class="card-block">-->
  <!--      <RwvCommentEditor-->
  <!--        v-if="isCurrentUser"-->
  <!--        :slug="slug"-->
  <!--        :content="comment.body"-->
  <!--      />-->
  <!--      <p v-else class="card-text">{{ comment.body }}</p>-->
  <!--    </div>-->
  <!--    <div class="card-footer">-->
  <!--      <a href="" class="comment-author">-->
  <!--        <img-->
  <!--          :src="comment.author.image"-->
  <!--          class="comment-author-img"-->
  <!--          alt="comment author image"-->
  <!--        />-->
  <!--      </a>-->
  <!--      <router-link-->
  <!--        class="comment-author"-->
  <!--        :to="{ name: 'profile', params: { username: comment.author.username } }"-->
  <!--      >-->
  <!--        {{ comment.author.username }}-->
  <!--      </router-link>-->
  <!--      <span class="date-posted">{{ comment.createdAt | date }}</span>-->
  <!--      <span v-if="isCurrentUser" class="mod-options">-->
  <!--        <i class="ion-trash-a" @click="destroy(slug, comment.id)"></i>-->
  <!--      </span>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
import { mapGetters } from "vuex";
import { COMMENT_DESTROY } from "@/store/actions.type";
// import RwvCommentEditor from "@/components/CommentEditor";

export default {
  name: "RwvComment",
  props: {
    slug: { type: String, required: true },
    comment: { type: Object, required: true }
  },
  // components: { RwvCommentEditor },
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
