<template v-if="">
  <ul class="error-messages">
    <li v-for="(value, key) in errors" :key="key">
      <span v-text="key"></span>
      <span
        v-for="(err, index) in value"
        :key="err + index"
        v-text="err"
      ></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RwvListErrors",
  props: {
    errors: {
      type: Object,
      required: true
    }
  }
};
</script>
