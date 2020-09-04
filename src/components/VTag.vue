<template>
  <router-link :to="homeRoute" :class="className"></router-link>
</template>

<script>
export default {
  name: "RwvTag",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: "tag-pill tag-default"
    }
  },
  computed: {
    homeRoute: () => ({ name: "home-tag", param: { tag: name } })
  }
};
</script>
