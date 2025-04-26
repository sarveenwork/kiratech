<template>
  <div class="container-fluid py-3" style="max-width: 1200px">
    <b-row class="w-100 mx-0">
      <!-- Left Side: Logo -->
      <b-col cols="8">
        <router-link to="/">
          <img src="@/assets/Logo.png" alt="kiratech" height="50" />
        </router-link>
      </b-col>
      <!-- Right Side: User Actions -->
      <b-col
        cols="4"
        class="text-right d-flex flex-wrap justify-content-end align-items-center"
      >
        <b-icon icon="bell" class="me-3" />
        <b-icon icon="gear" class="me-3" />
        <b-icon icon="box-arrow-right" class="me-3" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {};
  },
};
</script>
