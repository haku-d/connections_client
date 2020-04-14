<template>
  <v-app-bar app color="white">
    <v-toolbar-title>
      <router-link :to="{ path: '/' }">
        <strong>Connections</strong>
      </router-link>
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style>
.v-toolbar__title a {
  text-decoration: none;
}
</style>
