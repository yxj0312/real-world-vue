<template>
  <div>
    <RwvListErrors :errors="errors" />
  </div>
</template>

<script>
import RwvListErrors from "./ListErrors";
export default {
  name: "RwvCommentEditor",
  components: { RwvListErrors },
  data() {
    return {
      errors: { one: "no such comment" }
    };
  }
};
</script>
