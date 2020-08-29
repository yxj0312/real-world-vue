<template>
  <span v-if="canModify">
    <router-link class="btn btn-sm btn-outline-secondary" :to="editArticleLink">
      <i class="ion-edit"></i><span>&nbsp;Edit Article</span>
    </router-link>
  </span>
</template>