<template>
  <div>
    <RwvListErrors :errors="errors" />
    <form class="card comment-form" @submit.prevent="">
      <div class="card-block">
        <label for="commentEditor">Check out</label>
        <textarea
          id="commentEditor"
          class="form-control"
          v-model="comment"
          placeholder="Write a comment..."
          rows="3"
        ></textarea>
      </div>
      <div class="card-footer">
        <router-link
          class="comment-author"
          :to="{
            name: 'profile',
            params: { username: userName }
          }"
        >
          <img
            :src="userImage"
            class="comment-author-img"
            alt="comment author image"
          />
          {{ userName }}
        </router-link>
        <span class="date-posted">{{ comment.createdAt | date }}</span>
        <button class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
  </div>
</template>

<script>
import RwvListErrors from "./ListErrors";
// import { COMMENT_CREATE } from "@/store/actions.type";

export default {
  name: "RwvCommentEditor",
  components: { RwvListErrors },
  props: {
    slug: { type: String, required: true },
    content: { type: String, required: false },
    userImage: { type: String, required: false },
    userName: { type: String, required: true }
  },
  data() {
    return {
      comment: this.content || null,
      errors: {}
    };
  }
};
</script>
