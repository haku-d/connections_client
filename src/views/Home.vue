<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-lg">
        <h1>Connection App</h1>
        <router-link :to="{ name: 'connections' }" class="btn btn-primary">
          View connections
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>
