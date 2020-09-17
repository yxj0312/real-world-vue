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
    content: { type: String, required: true }
  },
  data() {
    return {
      comment: this.content || null,
      errors: {}
    };
  }
};
</script>
