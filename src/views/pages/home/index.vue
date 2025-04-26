<template>
  <layout>
    <profile />
    <div style="min-height: 80px" />
    <list />
  </layout>
</template>

<script>
import Layout from "@/views/layouts/main-layout";
import List from "@/views/pages/home/components/list.vue";
import Profile from "@/views/pages/home/components/profile.vue";
export default {
  name: "HomePage",
  components: {
    Layout,
    Profile,
    List,
  },
};
</script>
