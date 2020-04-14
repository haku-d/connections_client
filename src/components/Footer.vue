<template>
  <v-footer>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style>
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
